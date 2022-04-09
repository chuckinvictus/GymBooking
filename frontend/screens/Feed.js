import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, View } from 'react-native';


const styles = StyleSheet.create({
    newsContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    articleContainer: {
        borderWidth: 1,
        margin: 10,
        padding: 5,
        width: '85%',
        borderRadius: 10
    }
})


const Feed = ({ navigation }) => {
    const [newsState, setNewsState] = useState();

    useEffect(() => {
        getData();

        async function getData() {
            const response = await fetch('http://192.168.18.5:8000/api/news')
            const data = await response.json();
            setNewsState(data);
        }
    })

    return (
        <View style={styles.newsContainer}>
            {newsState && (newsState.map(article =>
            <View style={styles.articleContainer}>
            <Text>{article.title}</Text>
            <Text>{article.desc}</Text>
            </View>            ))}
        </View>
        
    );
};

export default Feed;