import { View, Text, StyleSheet, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomePlaceHolder from '../../../components/placeholder/home'
import { fetchNewsApiCaller } from '../../../api'
import { useDispatch, useSelector } from 'react-redux'
import { updateNewsState } from '../../../storage/redux/action/action'
import { Image } from 'react-native-elements'
import { ActivityIndicator } from 'react-native-paper'
import ROUTE from '../../../constant/route'
import moment from 'moment'

export default function Home({navigation}) {
  const [iseFetch, setIseFetch] = useState(false)
  const [isPullRefresh, setisPullRefresh] = useState(false)
  const dispatch = useDispatch()
  const selector = useSelector(state => state)

  const fetchNews = async ()=>{
    const _res = await fetchNewsApiCaller()

    // console.log(_res)
    updateNewsState(_res.data.articles, dispatch)
    setIseFetch(true)
    setisPullRefresh(false)
  }

  useEffect(()=>{
    fetchNews()
  }, [])
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lendsqr News</Text>
        <View>
          {
            (!iseFetch && (
              <FlatList
                data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                renderItem={()=>{
                  return (
                    <View style={{ marginTop: 8 }}>
                      <HomePlaceHolder />
                    </View>
                  )
                }} />
            ))
          }

          {( iseFetch && (<FlatList 
            data={selector.news}
            renderItem={({index, item})=>{
              return (
                <TouchableOpacity onPress={()=> navigation.navigate(ROUTE.DETAILS, {item})} style={{ flex: 1, margin: 20, marginVertical: 10 }}>
                  <View style={styles.itemContainer}>
                    <Image PlaceholderContent={<ActivityIndicator color={'blue'} />} style={styles.itemImage} source={{ uri: item.media }} />
                    <View style={{ flex: 1 }}>
                      <View style={{ justifyContent: 'space-between' }}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.topic}>{item.topic}</Text>
                      </View>
                      <Text style={styles.datePub}>
                        Published On: 
                        {moment(item.published_date).format("LL")}
                        {/* {(new Date(item.published_date)).toDateString()} */}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
            refreshControl={ 
              <RefreshControl 
              refreshing={isPullRefresh} 
              onRefresh={()=>{
                setisPullRefresh(true);
                fetchNews()
              }} 
              /> 
            }  />))}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 30
  },
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0.2,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.43)',
    borderRadius: 4,
    backgroundColor: 'white'
  },
  itemImage: {
    width: 120,
    height: 130,
    marginRight: 4
  },
  itemTitle: {
    fontWeight: '800',
    marginTop: 20,
    fontSize: 13
  },
  topic: {
    fontWeight: '300',
    fontSize: 10,
    marginVertical: 12
  },
  datePub: {
    fontSize: 11,
    fontWeight: '600'
  }
})