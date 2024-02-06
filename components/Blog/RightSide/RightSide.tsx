import React from 'react';
import styles from './RightSide.module.scss';
import WidgetTitle from 'components/share/WidgetTitle/WidgetTitle';
import MyListGroup from 'components/share/MyListGroup/MyListGroup';
import SimpleBlock from '../SimpleBlock/SimpleBlock';
import TagGroup from 'components/share/TagGroup/TagGroup';
import SearchInput from '../SearchInput/SearchInput';

export default function RightSide() {
  return (
    <section className='my-5'>
      <SearchInput />
      <WidgetTitle title={'Category'}/>
      <MyListGroup />
      <WidgetTitle title={'Recent Post'}/>
      <SimpleBlock />
      <SimpleBlock />
      <SimpleBlock />
      <WidgetTitle title={'Archives'}/>
      <MyListGroup />
      <WidgetTitle title={'Tages'}/>
      <TagGroup />
    </section>
  );
}