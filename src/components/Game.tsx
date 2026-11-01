import React from "react"

import { Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const Game = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Snake</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Game
