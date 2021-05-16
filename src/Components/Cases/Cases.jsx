import { StylesProvider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {casesSorted} from '../../api'
import styles from './Cases.module.css';

function Cases() {

    const [cases,setCases]=useState([]);

    useEffect(()=>{
        const fetchcases = async () =>{
           const result = await casesSorted();
            console.log(result);
            setCases(result.data);
         }
         fetchcases();
    },[]);

    return (
        <div>
            <h3 style={{color:"slategrey" ,marginTop:"50px"}}>Country wise cases</h3>
            < div className={styles.div}>
                {cases.map((i,idx) => <div key={idx} className={styles.eachDiv}>{i.country+"  -  "}{i.cases}</div>) }
            </div>        
        </div>
        
    )
}

export default Cases;
