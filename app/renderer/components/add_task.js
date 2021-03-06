"use strict";

const TaskInput = require('./task_input');

module.exports = {
    data() {
        return {
            title: "",
            command: "",
            path: "",
        };
    },
    template: `
    <li class="run-card">
        <div class="collapsible-header row center-align add-task-header">
            <strong class="unselectable-text">
                <span class="small material-icons">add</span>
                Add New Task
            </strong>
        </div>
        <div class="collapsible-body container">
            <task-input v-on:save="addTask"></task-input>
        </div>
    </li>    
    `,
    methods: {
        addTask(task) {
            this.$emit('add', task);
        }
    },
    components: {
        "task-input": TaskInput
    }
};
