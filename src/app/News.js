import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TableData from './TableData'
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
    width:23,
    paddingLeft:10,
    paddingRight:10,
};

const News = React.createClass({
    makeStructure: function (raw) {
      return raw.map(function(row, index){
          for (var i in row) {
              if  (row[i] === '') row[i] = ' ';
          }
          return <TableRow style={{background: index%2==0 ? '#FFF' : '#E0E0E0'}} key={index}>
              <TableRowColumn style={style}><FontIcon className="material-icons" style={{color:'#FFC107', cursor:'pointer'}}>edit</FontIcon></TableRowColumn>
              <TableRowColumn style={style}><FontIcon className="material-icons" style={{color:row.circle ? '#4CAF50':'#B0BEC5'}}>fiber_manual_record</FontIcon></TableRowColumn>
              <TableRowColumn style={{width:85}}>{row.id}</TableRowColumn>
              <TableRowColumn style={{width:35}}><FontIcon className="material-icons" style={{color:row.foto ? '#4CAF50':'#B0BEC5'}}>collections</FontIcon></TableRowColumn>
              <TableRowColumn>{row.date}</TableRowColumn>
              <TableRowColumn style={{width:'30%'}}>{row.title}</TableRowColumn>
              <TableRowColumn>{row.rubric}</TableRowColumn>
              <TableRowColumn>{row.lastedit}</TableRowColumn>
              <TableRowColumn>{row.author}</TableRowColumn>
            </TableRow>;
      });
    },
    smallAlert: function(){
      alert('И тут мы переходим к добавлению новости');
    },
    getInitialState: function () {
        return {
            content: this.makeStructure(TableData)
        };
    },
    render: function (){
        return <div>
            <h1>Новости</h1>
            <FloatingActionButton style={{
                    position: 'fixed',
                    top: '102px',
                    left: '38px',
                    zIndex:10
                }}
                mini={true}
                backgroundColor='#FFC107'
                onTouchTap={this.smallAlert}>
                <FontIcon className="material-icons" style={{color:'#B0BEC5'}}>add</FontIcon>
            </FloatingActionButton>
        <Table
        selectable={false}
        multiSelectable={false}
        >
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
            >
                <TableRow>
                    <TableHeaderColumn style={{width:43, padding:0}}> </TableHeaderColumn>
                    <TableHeaderColumn style={{width:43, padding:0}}> </TableHeaderColumn>
                    <TableHeaderColumn tooltip="ID новости" style={{width:85}}>ID</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Имеются фотки чтоле" style={{width:35}}><FontIcon className="material-icons" style={{color:'#9E9E9E'}}>camera_alt</FontIcon></TableHeaderColumn>
                    <TableHeaderColumn tooltip="Дата создания">Дата</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Заголовок новости" style={{width:'30%'}}>Заголовок</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Рубрика новости">Рубрика</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Последний редактор">Посл. редактировал</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Создал новость">Создал</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
                displayRowCheckbox={false}
            >
                {this.state.content}
            </TableBody>
        </Table>
            </div>;
    }
});
export default News;