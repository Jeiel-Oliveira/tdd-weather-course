import React from 'react'
import {fork, all} from 'redux-saga/effects'

export default function* () {
  yield fork(bootstrap);
}

function* bootstrap () {
  try {
    yield all(([]));
  } catch (e){
    //error handling
  }
}