import { TouchableOpacity, Image,StyleSheet } from "react-native"

export const MoviesCard = (props) => {
    return(
        <TouchableOpacity>
            <Image style={style.img} source={props.movieURL}/>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    img:{
        marginRight: 20,

    },
});