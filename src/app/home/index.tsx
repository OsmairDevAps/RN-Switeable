import { useRef } from 'react'
import { View, FlatList } from 'react-native'
import Swipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable'
import { contacts } from '../../utils/contacts'
import { Card } from '../../components/card'
import { Option } from '../../components/option'
import { styles } from './styles'

export function Home() {
  const openSwipeableRef = useRef<SwipeableMethods | null>(null)

  function onSwipeableWillOpen (direction: "left" | "right", current: SwipeableMethods | null) {
    if (direction === "left") {
      console.warn("DELETAR")
    }

    if(openSwipeableRef.current) {
      openSwipeableRef.current.close()
    }
    
    openSwipeableRef.current = current
  }

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({item}) => { 
          let current: SwipeableMethods | null = null

          return(
          <Swipeable
            ref={(swipeable) => current = swipeable}
            containerStyle={styles.swipeableContainer}
            overshootRight={false}
            onSwipeableWillOpen={(direction) => onSwipeableWillOpen(direction, current)}
            rightThreshold={50}
            renderRightActions={() => (
              <View style={styles.rightActions}>
                <Option icon='open-in-new' backgroundColor="#00b960" />
                <Option icon='close' backgroundColor="#3e68d7" />
              </View>
            )}
            renderLeftActions={() => (
              <View style={styles.leftActions}>
                <Option icon='delete' backgroundColor="#e83d55" />
              </View>
            )}
          >
            <Card name={item.name} email={item.email} />
          </Swipeable>
        )}}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}