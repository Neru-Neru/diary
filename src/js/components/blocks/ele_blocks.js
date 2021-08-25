import Blockly from 'blockly';

Blockly.Blocks['curry'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("カレー");
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("かれー");
      this.setHelpUrl("");
    }
  };

Blockly.JavaScript['curry'] = function(block) {
  var code = 'カレー';
  return code;
};

Blockly.Blocks['park'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("公園");
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("こうえん");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['park'] = function(block) {
  var code = '公園';
  return code;
};

Blockly.Blocks['baseball'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("野球");
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("やきゅう");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['baseball'] = function(block) {
  var code = '野球';
  return code;
};

Blockly.Blocks['game'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ゲーム");
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("げーむ");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['game'] = function(block) {
  var code = 'ゲーム';
  return code;
};

Blockly.Blocks['bicycle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("自転車");
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("じてんしゃ");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['bycicle'] = function(block) {
  var code = '自転車';
  return code;
};

Blockly.Blocks['car'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("車");
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("くるま");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['car'] = function(block) {
  var code = '車';
  return code;
};