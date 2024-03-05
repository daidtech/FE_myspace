import React from 'react';
import styles from './RightSide.module.scss';
import WidgetTitle from 'src/components/share/WidgetTitle/WidgetTitle';
import MyListGroup from 'src/components/share/MyListGroup/MyListGroup';
import SimpleBlock from '../SimpleBlock/SimpleBlock';
import TagGroup from 'src/components/share/TagGroup/TagGroup';
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