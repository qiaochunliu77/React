import React, { useEffect, useRef, memo } from "react";
import { connect } from 'react-redux';
import { categoryTypes, alphaTypes } from '../../api/config';
import Horizen from '../../baseUI/horizen-item/index'
import { NavContainer } from './style.js';

function Singers(props) {
    const { category, alpha } = props;
    const handleUpDateCategory = () => {

    }
    const handleUpDateAlphaTypes = () => {

    }
    return (
        <div>
            <NavContainer>
                <Horizen title="分类(默认热门):" list={categoryTypes} handleClick={(v) => handleUpDateCategory} oldVal={category}/>
                <Horizen title="首字母" list={alphaTypes} handleClick={(v) => handleUpDateAlphaTypes} oldVal={alpha}/>
            </NavContainer>
        </div>
    )
}
const mapStateToProps = (state) => (
    {
        category: state.singers.category,
        alpha: state.singers.alpha
    }
    
)
const mapDispatchToprops = (dispatch) => {

}
export default connect(mapStateToProps, mapDispatchToprops)(memo(Singers))

