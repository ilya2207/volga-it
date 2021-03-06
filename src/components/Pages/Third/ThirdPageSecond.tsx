import React from 'react'
import BottomLink from 'components/BottomLink/BottomLink'
import { IPage } from '../types'

const ThirdPageSecond: React.FC<IPage> = ({ dispatch }) => {
  const clickHandler = (value: 5 | 6 | 7) => {
    return () => {
      dispatch('lenstype', value)
    }
  }
  return (
    <>
      <div>
        <h4 className="content__title">Do you need vision correction?</h4>
        <div className="item_wrapper">
          <div className="item third_item" onClick={clickHandler(6)}>
            Near Vision
          </div>
          <div className="item third_item" onClick={clickHandler(6)}>
            Distance Vision
          </div>
          <div className="item third_item" onClick={clickHandler(7)}>
            Multifocal / Progressive
          </div>
        </div>
      </div>
      <BottomLink textContent={'Skip'} />
    </>
  )
}

export default ThirdPageSecond
