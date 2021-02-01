import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';

// import styles
import { Text } from '@styles/CommonStyles';
import markerImage from '@images/delivery_128.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '@styles';


const NUM_ITEMS = 10

function getColor(i) {
    const multiplier = 255 / (NUM_ITEMS - 1)
    const colorVal = i * multiplier
    return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`
}

const exampleData = [...Array(5)].map((d, index) => {
    const backgroundColor = getColor(index)
    return {
        key: `item-${backgroundColor}`,
        label: String(index),
        backgroundColor,
    }
})


function DraggableFlowList() {
    const [data, setData] = useState(exampleData);
    const [numItems, setNumItems] = useState(5)

    const renderItem = useCallback(({ item, index, drag, isActive }) => {
        /**
         * 1. 아이템의 종류에 따라서 기본 마커가 달라진다 ( 맛집, 관광지, 카페 )
         * 2. index 처음과 끝은 하이라이팅 지원.
         */
        return (
            <TouchableOpacity
                style={[styles.wrapperContainer]}
                onLongPress={drag}
                activeOpacity={0.7}
            >
                <Image style={styles.iconWrapper} source={markerImage} />
                <MaterialCommunityIcons style={styles.horizontalDots} color={
                    index === 0 || index === numItems - 1 ? Colors.YELLOW_6 : Colors.GRAY_2
                } name='dots-horizontal-circle' />
                <Text style={styles.textContainer}>대구광역시청 동부도서관 {item.label}</Text>
                { index !== numItems - 1 ?
                    <MaterialCommunityIcons style={styles.verticalDots} color={Colors.GRAY_7} size={20} name='dots-vertical' /> : null
                }
            </TouchableOpacity>
        );
    }, [])

    const handleDragEnd = (e) => {
        const { to, from, data } = e
        console.log('Index to :', to, '=> from :', from)
        // 같은 자리에 놓을때는 이벤트 종료
        if (to === from) {
            return;
        }
        setData(e.data)
    }

    return (
        <SafeAreaView style={styles.container}>
            <DraggableFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `draggable-item-${item.key}`}
                onDragEnd={(e) => handleDragEnd(e)}
            // onDragEnd={(data) => console.log(data)}
            />
        </SafeAreaView>
    );
}

export default DraggableFlowList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 30,
        marginBottom: 20
    },
    wrapperContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        marginVertical: 5
    },
    textContainer: {
        // color: 'white',
        fontSize: 18,
    },
    iconWrapper: {
        width: 16,
        height: 16,
    },
    horizontalDots: {
        marginHorizontal: 15
    },
    verticalDots: {
        position: 'absolute',
        left: 27,
        bottom: -14
    }
})