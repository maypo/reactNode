import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Paragraph from '../src/components/Paragraph';

describe("Paragraph test suite", function() {
  const testText = 'boo';
  it("contains text passed", function() {
    expect(shallow(<Paragraph text={testText} />).contains(testText)).to.equal(true);
  });

  it("contains className used", function() {
    expect(shallow(<Paragraph text={testText} />).is('.paragraph')).to.equal(true);
  });

  it("contains only one div as passed", function() {
    expect(mount(<Paragraph text={testText} />).find('.paragraph').length).to.equal(1);
  });
});
