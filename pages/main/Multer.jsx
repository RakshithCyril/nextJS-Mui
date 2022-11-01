import React from "react";
import Head from "next/head";
import InputWithIcon from "./Mui/Form";
import ResponsiveAppBar from "./Mui/Nav";

export default class Test extends React.Component{
    render(){
        return(
            <div>
                <Head>
                    <title>test</title>
                </Head>
                <main>
                    <ResponsiveAppBar />
                    <h1>test</h1>
                    <InputWithIcon />
                </main>
            </div>
        )
    }
}
