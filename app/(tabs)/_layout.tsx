import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0a7ea4',
        headerShown: false,
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',  
            tabBarIcon: ({ color, focused}) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
          />
      </Tabs>
  )
}