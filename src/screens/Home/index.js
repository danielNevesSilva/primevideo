import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native"

import PrimeVideoLogo from "../../components/assets/prime_video.png";
import AmazonLogo from "../../components/assets/amazon_logo.png";
import MovieTheWhell from"../../components/assets/movies/the_wheel_of_time.png";


import { MOVIESWATCHING } from "../../components/utils/moviesWatching";
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESCRIME } from "../../components/utils/moviesCrimes";
import { MOVIESWATCH } from "../../components/utils/moviesWatch";

export const Home = ()=>{
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image style={style.primeLogoImg} source={PrimeVideoLogo}/>
                <Image style={style.amazonLogoImg} source={AmazonLogo}/>
            </View>


            <View style={style.category}>
                <TouchableOpacity>
                    <Text Style={style.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text Style={style.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text Style={style.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text Style={style.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} style={style.contentMoves} >
            <TouchableOpacity style={style.movieImageThumnail}>
                <Image source={MovieTheWhell} style={style.movieImage} />
            </TouchableOpacity>

        <Text style={style.movietext} >Continue whatching</Text>
        <FlatList
        data={MOVIESWATCHING}
        keyExtractor={(item)=> item.id }
        renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        contentContainerStyle={style.containerList}
        showsHorizontalScrollIndicator={false}
        
        />

<Text style={style.movietext} >Crime Movies</Text>
        <FlatList
        data={MOVIESCRIME}
        keyExtractor={(item)=> item.id }
        renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        contentContainerStyle={style.containerList}
        showsHorizontalScrollIndicator={false}
        
        />

<Text style={style.movietext} >Watch in your language</Text>
        <FlatList
        data={MOVIESWATCH}
        keyExtractor={(item)=> item.id }
        renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        contentContainerStyle={style.containerList}
        showsHorizontalScrollIndicator={false}
        
        />
        </ScrollView>
        </View>
    )
};


const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },

    header:{
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    amazonLogoImg:{
        marginTop:-32,
        marginLeft: 30,
        
    },

    category:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
        
    },
    categoryText: {
        fontSize: 20,
        fontweight: "700",
        color: "#FFf",
    },

    movietext: {
        color: "#ffff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,
    },

    movieImageThumnail: {
        width: "100%",
        alignItems: "center",
    },
    containerList:{
        paddingLeft: 18,
        paddingRight: 30,

    },
    contentMoves:{

    },
});