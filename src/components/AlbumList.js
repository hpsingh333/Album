import React , {Component} from 'react';
import {ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component{ 

    constructor(){
        super();
        this.state={albums:[]};
    }

    componentWillMount(){
        fetch("http://rallycoding.herokuapp.com/api/music_albums").then(response =>response.json()).then(responseJSON =>{
            this.setState({albums:responseJSON})
        })
    }

    renderAlbums(){
        if (this.state.albums)
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
    }

    render(){
        return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    );
    }
}