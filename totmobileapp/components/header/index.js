import React, {Component} from 'react';
import { View, Text } from 'react-native';

//Stateless Component
const Header = ({title,subTitle}) => {
    return (
        <View>
            <Text style={{ fontSize: 40, color: 'red' }}>
              {title}
            </Text>
            <Text>
               {subTitle}
            </Text>  
        </View>
    );
};

export default Header;

// <Header />