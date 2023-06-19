import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carousel from '../components/Carousel'

export default {
    title: 'LevaUiKit/Carousel',
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    items: [
        {
            key: 1,
            label: "Image 1",
            alt: "image1",
            url:
                "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
        },
        {
            key: 2,
            label: "Image 2",
            alt: "image2",
            url: "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4="
        },
        {
            key: 3,
            label: "Image 3",
            alt: "image3",
            url:
                "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
        }
    ]
};