import { TextInput } from 'react-native'
import React from 'react'
import { SearchBarProps } from '../types/searchBar'

export default function SearchBar({value,searchStations}:SearchBarProps) {
  return (
    <TextInput
            style={{
              borderWidth: 1,
              outline: "none",
              width: "50%",
              borderRadius: 10,
              marginBottom: 10,
              marginTop: 10,
            }}
            placeholder="Search..."
            value={value}
            onChangeText={(text) => searchStations(text)}
          />
  )
}