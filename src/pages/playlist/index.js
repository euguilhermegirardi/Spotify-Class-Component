import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';
import { Container, Header, SongList, SongItem } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.title,
          author: PropTypes.string,
          album: PropTypes.string,
        })),
      }),
      loading: PropTypes.bool,
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    console.log(id)

    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;

    return (
      <Container>
        <Header>
          <img
          src={playlist.thumbnail}
          alt={playlist.title}
          />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            { !!playlist.songs && <p>{playlist.songs.length}
            {playlist.songs.length === 1 ? (<small> song</small>) : (<small> songs</small>)} </p> }


            { !!playlist.songs &&
              <button
              type="button"
              onClick={() => this.props.loadSong(playlist.songs[0], playlist.songs)}>
                PLAY
            </button>
            }
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th><img src={ClockIcon} alt="Duration" /></th>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>No song registered.</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <SongItem
                  key={song.id}

                  onClick={() => this.setState({ selectedSong: song.id })}

                  onDoubleClick={() => this.props.loadSong(song, playlist.songs)}

                  selected={this.state.selectedSong === song.id}

                  playing={this.props.currentSong && this.props.currentSong.id === song.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Add" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>{song.duration}</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetails.loading ? (
    <Container loading>
      <Loading />
      </Container>
        ) : (
      this.renderDetails()
      );
  }
};

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  player: state.player,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

