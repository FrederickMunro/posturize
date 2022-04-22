import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsOfService = ({ navigation }) => {
  return (
    <View style={styles.outsideContainer} >
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                {'\n'}                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis justo vel dolor hendrerit lacinia. Fusce sit amet viverra lectus. Cras arcu ex, malesuada vel nibh vel, tristique vestibulum quam. Donec commodo, diam in blandit ullamcorper, felis lorem eleifend neque, et aliquet lectus lacus at odio. Pellentesque est mauris, elementum ac purus at, vehicula consectetur mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce accumsan tortor commodo vulputate semper. Praesent eros erat, aliquam at leo dignissim, eleifend imperdiet justo. Nulla facilisi. Proin aliquam velit semper velit varius, vel cursus magna aliquam. Suspendisse leo justo, bibendum convallis elementum vitae, facilisis vel felis. Morbi viverra velit arcu, eu pretium dui imperdiet eu.
                {'\n\n'}
                Nunc laoreet luctus dui, ut iaculis ligula egestas in. Duis pharetra ipsum in risus maximus, nec mollis nisl feugiat. Aliquam erat volutpat. Suspendisse potenti. Morbi in dui risus. Vestibulum eleifend hendrerit convallis. Vestibulum sapien justo, ultrices nec sem sit amet, laoreet egestas nibh.
                {'\n\n'}                
                Vivamus congue ligula vel pellentesque tincidunt. In fermentum pellentesque justo, scelerisque lacinia neque pulvinar nec. Praesent id consectetur diam. Cras ut ullamcorper nisi. Fusce aliquet lacinia ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum vitae nibh ut fringilla. Vivamus feugiat urna vel massa pellentesque pharetra. Maecenas congue a arcu et elementum. Nulla a lectus nec lectus pulvinar aliquam.
                {'\n\n'}
                Mauris vel ipsum ultricies, facilisis metus vitae, blandit mi. Nullam augue lacus, lacinia ac est id, mollis consequat tortor. Maecenas sodales quam in placerat bibendum. Ut metus nunc, tincidunt ac feugiat tempus, mollis sit amet arcu. Cras varius nunc est, a feugiat mauris auctor quis. Suspendisse vitae magna nisl. Phasellus eleifend sed massa eu euismod. Pellentesque in lectus in quam euismod euismod vel a dui. Mauris placerat, quam at consectetur aliquet, tellus mi iaculis massa, ac elementum dui sem eu tortor. Morbi mollis risus nisl, vitae rhoncus orci consequat eget. Mauris ut pellentesque ipsum. Maecenas id turpis mattis, scelerisque velit nec, tincidunt lorem.
                {'\n\n'}
                Fusce euismod, sem vitae posuere pellentesque, magna quam dapibus eros, lacinia molestie purus elit euismod quam. Nam nec neque at ante molestie blandit. Sed ut ipsum ac orci placerat molestie. Mauris massa libero, facilisis ultricies tortor a, semper feugiat lacus. Nullam cursus justo vel sagittis sollicitudin. Aenean mauris mauris, porta ut blandit ut, commodo sed nisl. In eget aliquet neque, in consequat arcu. Donec feugiat ornare nunc, pharetra molestie sapien egestas quis. Suspendisse commodo mauris elit, eget rutrum massa finibus sed. Praesent laoreet faucibus finibus. Nunc in justo posuere, dapibus arcu eget, aliquet enim. Vivamus gravida pharetra rutrum. 
            </Text>
        </ScrollView>
    </View>
  )
}

export default TermsOfService

const styles = StyleSheet.create({
    outsideContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white'
    },
    container: {
        height: '100%',
        width: '92%',
        marginBottom: 25
    },
    title: {
        fontSize: 20
    }
});