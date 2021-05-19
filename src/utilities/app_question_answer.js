import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AppStyle } from '../styles/app_style';

const QuestionAnswer = (props) => {
    var question_components = []

    const answ = 'Lorem ipsum dolor sit amet, consectetur'+
        'adipiscing elit. Mauris vehicula cursus purus'+
        'at pulvinar. Integer molestie elit egestas'+
        'maximus ultricies. Sed auctor tempor ligula.'+
        'Nulla imperdiet mauris et enim tempor, et'+
        'scelerisque ligula facilisis. Interdum et'+
        ' malesuada fames ac ante ipsum primis in '
        
    const array = [
        ["+ how do i charge sound.on ?", answ],
        ["+ how do the touch controls work ?", answ],
        ["+ how do i locate my device when its lost ?", answ],
        ["+ I am having trouble syncing my device.", answ],
        ["+ how do i replace my sound.on band ?", answ],
        ["+ how do i get a hold of someone at alt + esc ?", answ]
    ];


    for (let index = 0; index < array.length; index++) {
        var cmp = <TouchableOpacity key={index} onPress={() => props.navigation.navigate(
            'AppAnswer', 
            {'question': array[index][0].toString().replace('+',''),
             'answer':array[index][1]}) }>

            <View style={{ marginTop:30}} key={index}>
                <Text style={AppStyle.fontMedium}>{array[index][0]}</Text>
            </View>
        </TouchableOpacity>
        question_components.push(cmp);
    }

    return question_components;
}


export {
    QuestionAnswer
}