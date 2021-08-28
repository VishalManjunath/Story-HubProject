import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';

export default class WriteStory extends React.Component {
    render() {
        return(
            <View>
                <Header />
                <TextInput
                placeHolder = "StoryTitle"
                />
                <TextInput
                placeHolder = "Author"
                />
                <TextInput
                multiline = {true}
                placeHolder = "WriteStory"
                />
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}