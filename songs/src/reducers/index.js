import {combineReducers} from 'redux';

const SongsReducer = () => {
    return [
        {tittle:'disarray', duration:'2:37'},
        {tittle:'R U mine', duration:'4:00'},
        {tittle:'let it happen', duration:'7:03'},
        {tittle:'dancing shoes', duration:'3:33'}
    ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
    if (action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}   

export default combineReducers ({
    songs: SongsReducer,
    selectedSong: SelectedSongReducer
});