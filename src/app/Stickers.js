import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const messages = [
    {
        to: [
            'Дмитрий Юрчев',
            'Александр Коншин'
        ],
        from: 'Пономарев Андрей',
        text : ' Завтра же переходим на Laravel и PHP7',
        label: 'alarm'
    },
    {
        to: [
            'Мария Чегляева',
            'Павел Беляев'
        ],
        from: 'Пономарев Андрей',
        text : 'Посмотреть раздел "Новости"',
        label: 'event'
    },
    {
        to: [
            'Мария Чегляева',
            'Павел Беляев'
        ],
        from: 'Пономарев Андрей',
        text : 'Посмотреть меню',
        label: 'event'
    },
];

const paperStyle = {
    position:'relative',
    display: 'table',
    padding:'10px 10px',
    minHeight:114,
    minWidth:400,
    margin:'auto',
    marginBottom:'20px',
    maxWidth:800,
    textAlign:'initial'

};

const Stickers = React.createClass({
    colors: {
        alarm : '#C62828',
        notice: '#FFC107',
        event: '#4CAF50',
        regular: '#757575'
    },
    
    transform: function (arr) {
        var that = this;
        return arr.map(function (row, index) {
            var to='';
            for (var i in row.to) {
                to+=row.to[i]+', ';
            }
            to = to.slice(0, -2);
            return  <Card style={{marginBottom: '20px'}} key={index}>
                <CardHeader
                    title={row.from}
                    subtitle="13.02.1990 21:39"
                    avatar="http://lorempixel.com/100/100/nature/"
                />
                <CardText style={{color:that.colors[row.label], fontSize: 16}}>
                    {row.text}
                </CardText>
                <CardActions>
                    <FlatButton label="Понял" />
                </CardActions>
            </Card>
        }).reverse();
    },
    
    getInitialState: function () {
        return {
            stickers: this.transform(messages)
        }
    },
    render: function (){
        return <div style={{padding: "14px 24px 24px 70%"}}>
            {this.state.stickers}
            </div>
    }
});

export default Stickers;
