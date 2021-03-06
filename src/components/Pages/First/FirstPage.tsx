import React from 'react'
import womenImg from 'assets/img/stages/1/women.svg'
import manImg from 'assets/img/stages/1/man.svg'
import BottomLink from '../../BottomLink/BottomLink'
import { IPage } from '../types'

const FirstPage: React.FC<IPage> = ({ dispatch }) => {
  function clickHandler(value) {
    return () => {
      dispatch('gender', value)
    }
  }

  return (
    <>
      <div>
        <h4 className="content__title">You are looking for</h4>
        <div className="item_wrapper">
          <div className="item first_and_second_item" onClick={clickHandler(5)}>
            <img src={womenImg} alt="" />
            Women's Styles
          </div>
          <div className="item first_and_second_item" onClick={clickHandler(4)}>
            <img src={manImg} alt="" />
            Men's Styles
          </div>
        </div>
      </div>
      <BottomLink textContent={"I'd like to see both"} />
    </>
  )
}

export default FirstPage
