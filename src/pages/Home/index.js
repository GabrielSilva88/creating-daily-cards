import React, { useContext, useState, useEffect } from "react";
import { Button, Text, View } from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

import { Background } from "./styles";

export default function Home() {
   const [listBalance, setListBalance] = useState([]);
    return (
        <Background>
            <Header title="Minhas Movimentações" />
        </Background>
          
    )
}

/**
 *  const { signOut, user } = useContext(AuthContext);
 *   <Text>Tela home</Text>
            <Text>Nome: {user.name} </Text>
            <Button
                title="Sair da Conta"
                onPress={() => signOut()}
            />
 * 
 * 
 */