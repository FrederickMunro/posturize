import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Dimensions } from 'react-native-web';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryLegend, VictoryAxis } from 'victory-native';

const ChartsScreen = ({ navigation }) => {
    const data = {
        correctPosture: [{ x: 'Sun', y: 4.3 }, { x: 'Mon', y: 6 }, { x: 'Tues', y: 5 }, { x: 'Wed', y: 4.5 }, { x: 'Thur', y: 7 }, { x: 'Fri', y: 5 }, { x: 'Sat', y: 4 }],
        incorrectPosture: [{ x: 'Sun', y: 3 }, { x: 'Mod', y: 2.5 }, { x: 'Tues', y: 3.3 }, { x: 'Wed', y: 1.5 }, { x: 'Thur', y: 2 }, { x: 'Fri', y: 1.4 }, { x: 'Sat', y: 2 }],
    }
    return (
        <View style={styles.page}>
            <Text style={styles.sectionTitle}>Detailed Report</Text>
            <VictoryChart>
                <VictoryAxis label="Day" style={{ axisLabel: { padding: 30, fontSize: 18, fill: '#000' } }} />
                <VictoryAxis dependentAxis label="Hours" style={{ axisLabel: { padding: 30, fontSize: 18, fill: '#000' } }} />
                <VictoryGroup offset={20}>
                    <VictoryBar 
                        data={data.correctPosture}
                        style={
                            {data: { 
                            fill: 'blue',
                            },
                          }}
                      />
                    <VictoryBar
                     data={data.incorrectPosture}
                      style={
                          {data: { 
                          fill: 'orange',
                          },
                        }}
                    />
                </VictoryGroup>
                <VictoryLegend
                x={Dimensions.get('screen').width/2 +50}
                 orientation = "horizontal"
                 gutter={20}
                data={[
                    {
                        name: 'Correct Posture',
                        symbol: { fill: 'blue' }
                    },
                    {
                        name: 'Incorrect Posture',
                        symbol: { fill: 'orange' }

                    }
                ]} />
            </VictoryChart>
        </View>
    );
};
export default ChartsScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#eceff2',
        paddingTop: 50,
        padding: 10
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        textAlign: 'center',
      },
})