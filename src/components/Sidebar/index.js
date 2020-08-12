import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";
import { Container, NewPlaylist, Nav } from "./styles";
import AddPlaylistIcon from "../../assets/images/add_playlist.svg";
import Loading from "../../components/Loading";

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navigate</Link>
            </li>
            <li>
              <a href="/">Radio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>YOUR LIBRARY</span>
            </li>
            <li>
              <a href="/">Your Daily Mix</a>
            </li>
            <li>
              <a href="/">Recently Played</a>
            </li>
            <li>
              <a href="/">Music</a>
            </li>
            <li>
              <a href="/">Albuns</a>
            </li>
            <li>
              <a href="/">Artists</a>
            </li>
            <li>
              <a href="/">Station</a>
            </li>
            <li>
              <a href="/">Local Files</a>
            </li>
            <li>
              <a href="/">Videos</a>
            </li>
            <li>
              <a href="/">Podcats</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>

        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Add Playlist" />
          <p>New Playlist</p>
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
