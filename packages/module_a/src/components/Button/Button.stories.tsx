import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  text: "Hello",
  text2: "World",
  /*π The args you need here will depend on your component */
};
