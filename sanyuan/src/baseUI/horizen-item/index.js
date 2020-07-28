import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import Scroll from '../scroll/index'
import { PropTypes } from 'prop-types';
import style from '../../assets/global-style';


const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: center;
  overflow: hidden;
  >span:first-of-type{
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    color: grey;
    font-size: ${style["font-size-m"]};
    vertical-align: middle;
  }
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 5px;
  border-radius: 10px;
  &.selected{
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`

function Horizen(props) {
  const [refreshCategoryScroll, setRefreshCategoryScroll] = useState(false);
  const { list, oldVal, title } = props;
  const { handleClick } = props;
  const Category = useRef(null);
  
  useEffect(() => {
    let categoryDOM = Category.current;
    let tagElems = categoryDOM.querySelectorAll("span");
    let totalWidth = 0;
    Array.from(tagElems).forEach(ele => {
      totalWidth += ele.offsetWidth;
    });
    totalWidth += 2;
    categoryDOM.style.width = `${totalWidth}px`;
    setRefreshCategoryScroll(true); //刷新一次
  }, [refreshCategoryScroll]);

  const clickHandle = (item) => {
    handleClick(item.key);
  }

    return (
        <Scroll direction={"horizental"} refresh={true}>
            <div ref={Category}>
                <List>
                    <span>{title}</span>
                    {
                        list.map((item) => {
                            return (
                                <ListItem
                                    key={item.key}
                                    className={oldVal === item.key ? 'selected' : ''}
                                    onClick={() => clickHandle(item)}>
                                    {item.name}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>

        </Scroll>
    )
}

Horizen.defaultProps = {
    title: "",
    list: [],
    handleClick: null
};

Horizen.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
    handleClick: PropTypes.func
};

export default memo(Horizen);