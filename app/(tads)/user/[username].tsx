import React from 'react';
import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

function Username() {
    const router = useRouter();
    const { username } = useLocalSearchParams();

    return (
        <View>
            <Text
             style = {{
                backgroundColor : "gray",
                fontSize : 100
              }}
            >Username: {username ? username : 'No username provided'}</Text>
        </View>
    );
}

export default Username;
