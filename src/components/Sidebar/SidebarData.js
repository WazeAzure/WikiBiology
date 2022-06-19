import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Point } from './SidebarElements';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Introduction',
    path: 'introduction',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: '/Introduction/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: 'Catabolism',
    path: 'catabolism',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: '/Introduction/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: 'Oxidation and Reduction',
    path: 'oxidation-and-reduction',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: '/Introduction/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: 'Glycolysis',
    path: 'glycolysis',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: '/Introduction/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: 'Krebs Cycle',
    path: 'krebs-cycle',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: '/Introduction/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: 'Electron Transport',
    path: 'electron-transport',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: '/Introduction/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: 'Theory of Knowledge',
    path: 'tok',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: 'tok/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: 'Lab Work',
    path: 'lab',
    icon: <MdIcons.MdOutlineScience />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: 'tok/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: 'Assessment',
    path: 'assessment',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: 'tok/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  },
  {
    title: 'Reference',
    path: 'reference',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'quiz 1',
        path: 'tok/quiz_1',
        icon: <AiIcons.AiFillHome />
      }
    ]
  }
];

export function SideComponent(props){
  return(
    <NavLink className="point-component" to={props.item.path} style={{display: "flex", alignItems: "center"}}>
      <i style={{marginRight: "2rem"}}>{props.item.icon}</i>
      <p>{ props.item.title }</p>
    </NavLink>
  )
};
