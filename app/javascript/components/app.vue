<template>
  <div id="app">

    <second></second>
    <!-- <draggable @start="drag=true" @end="drag=false">
        <ul>
                <li>
                first
                </li>
                 <li>
                second
                </li>
                <li>
                three
                </li>
        </ul>
    </draggable> -->
  
    <!-- <ul>
      <li><div style="background-color: orange; height: 5vh; width: 5vw;"></div></li>
      <li><div style="background-color: blue; height: 5vh; width: 5vw;"></div></li>
      <li><div style="background-color: green; height: 5vh; width: 5vw;"></div></li>
    </ul>
    <ul>
    <li><div style="background-color: pink; height: 5vh; width: 5vw;"></div></li>
      <li><div style="background-color: blue; height: 5vh; width: 5vw;"></div></li>
      <li><div style="background-color: black; height: 5vh; width: 5vw;"></div></li>
    </ul>
    <ul>
       <li><div style="background-color: magenta; height: 5vh; width: 5vw;"></div></li>
      <li><div style="background-color: greenyellow; height: 5vh; width: 5vw;"></div></li>
      <li><div style="background-color: red; height: 5vh; width: 5vw;"></div></li>
    </ul> -->
    
 

        <draggable id="dragstyle"> 
        <div class="itemsdrag" style="background-color: yellow; height: 10vh; width:25vw;">1</div>
        <div class="itemsdrag" style="background-color: blue; height: 10vh; width:25vw;">2</div>
        <div class="itemsdrag" style="background-color: pink; height: 10vh; width:25vw;">3</div>
        <div class="itemsdrag" style="background-color: yellowgreen; height: 10vh; width:25vw;">4</div>
        <div class="itemsdrag" style="background-color: orange; height: 10vh; width:10vw;">5</div>
        <div class="itemsdrag" style="background-color: magenta; height: 10vh; width:10vw;">6</div>
        <div class="itemsdrag" style="background-color: beige; height: 10vh; width:10vw;">7</div>
        <div class="itemsdrag" style="background-color: blue; height: 10vh; width:10vw;">8</div>
        <div class="itemsdrag" style="background-color: burlywood; height: 10vh; width:10vw;">9</div>
        <div class="itemsdrag" style="background-color: sandybrown; height: 10vh; width:10vw;">10</div>
        <div class="itemsdrag" style="background-color: yellow; height: 10vh; width:10vw;">11</div>
        <div class="itemsdrag" style="background-color: turquoise; height: 10vh; width:10vw;">12</div>
        </draggable>
  
      
      <!-- <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p> -->
      <!-- <ul>
         <VueDraggableResizable id='dragstyle' :w="400" :h="400"  :grid=[100,100] @dragging="onDrag" @resizing="onResize">
          <li class="itemsdrag">hi</li>
          <li class='itemsdrag'>hi</li>
          <li class='itemsdrag'>hi</li>
            </VueDraggableResizable>   
          </ul> -->

    <dnd-grid-container
            :layout.sync="layout"
            :cellSize="cellSize"
            :maxColumnCount="maxColumnCount"
            :maxRowCount="maxRowCount"
            :margin="margin"
            :bubbleUp="bubbleUp"
            
        >
            <dnd-grid-box
                boxId="settings"
                dragSelector="div.card-header"
            >
                <div class="card demo-box">

                    <div class="card-body row" style="background-color: red;">
                        <div class="form-group row">
                            <label for="settings-margin-input" class="row-sm-4 row-form-label">Margin</label>
                            <div class="col-sm-8">
                                <input class="form-control" type="number" v-model.number="margin" id="settings-margin-input">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="settings-grid-size-w-input" class="row-sm-4 rowl-form-label">Cell Size</label>
                            <div class="col-sm-4">
                                <input class="form-control" type="number" v-model.number="cellSize.w" id="settings-grid-size-w-input">
                            </div>
                            <div class="col-sm-4">
                                <input class="form-control" type="number" v-model.number="cellSize.h">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="settings-bubble-up-input" class="row-sm-4 row-form-label">Bubble Up</label>
                            <div class="row-sm-8">
                                <input type="checkbox" v-model="bubbleUp" id="settings-bubble-up-input">
                            </div>
                        </div>
                        <button class="btn btn-success" @click="boxCount++">Add Box</button>
                        <button class="btn btn-danger" @click="boxCount = Math.max(0, boxCount-1)">Remove Box</button>
                    </div>
                </div>
            </dnd-grid-box>
            <dnd-grid-box
                v-for="number in boxCount"
                :boxId="number"
                :key="number"
                dragSelector="div.card-header"
                resizeVisible
                offset
            >
                <div class="card demo-box">
                    <div class="card-header">
                        Box {{ number }}
                    </div>
                </div>
            </dnd-grid-box>
        </dnd-grid-container>
        

  </div>
</template>

<script>
import Vue from 'vue/dist/vue.js';
import second from './second.vue'
import lodash from 'lodash'
import draggable from 'vuedraggable'
import VueDraggableResizable from 'vue-draggable-resizable'
import { Container, Box } from '@dattn/dnd-grid'

// minimal css for the components to work properly
Vue.component('Container', Container); 
Vue.component('Box', Box);


export default {
  data: function () {
    return {

     cellSize: {
                    w: 100,
                    h: 100
                },
                maxColumnCount: 12,
                maxRowCount: 12,
                bubbleUp: false,
                margin: 5,
                boxCount: 4,
                autoAddLayoutForNewBox: false,
                layout: [
                    {
                        id: 'settings',
                        hidden: false,
                        pinned: true,
                        position: {
                            x: 0,
                            y: 0,
                            w: 12,
                            h: 1
                        }
                    },
                    {
                        id: 1,
                        hidden: false,
                        pinned: false,
                        position: {
                            x: 4,
                            y: 0,
                            w: 2,
                            h: 1
                        }
                    },
                    {
                        id: 2,
                        hidden: false,
                        pinned: false,
                        position: {
                            x: 6,
                            y: 0,
                            w: 1,
                            h: 2
                        }
                    },
                    {
                        id: 3,
                        hidden: false,
                        pinned: false,
                        position: {
                            x: 4,
                            y: 1,
                            w: 2,
                            h: 3
                        }
                    },
                    {
                        id: 4,
                        hidden: false,
                        pinned: false,
                        position: {
                            x: 6,
                            y: 2,
                            w: 3,
                            h: 2
                        }
                    }
                ],
    }
  },

    computed: {
            layoutWithoutSettings () {
                return this.layout.filter((box) => {
                    return box.id !== 'settings'
                })
            }
        },
  methods: {
        onLayoutUpdate:  function(evt) {
                this.layout = evt.layout
        },
    onResize: function (x, y, width, height) {

      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  },
watch: {    
     layout: function(newvalue, oldvalue){
       console.log(newvalue)
    }
  },
  components: {
      second,
      draggable,
      VueDraggableResizable,
      DndGridContainer: Container,
    DndGridBox: Box,

  }
}
</script>

<style scoped>

  .dnd-grid-container {
      border: 2px solid black;

    }
  .demo-box {
        width: 100%;
        height: 100%;
    }
#dragstyle {
        /* display: flex; 
    flex-direction: row; */
    display: grid;
    grid-template-columns: auto auto auto auto;

}
p {
  font-size: 2em;
  text-align: center;
}
.selectdrag {
    height: 20vh; 
    width: 20vw;
    background-color: red;
    margin: 2%;
}
.secondselect {
    height: 10vh; 
    width: 10vw;
    background-color:turquoise;

}
ul {
    list-style: none;

}


td {
    background-color: orange;
    padding: 5vh;
}
</style>