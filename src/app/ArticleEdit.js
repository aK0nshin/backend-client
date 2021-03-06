import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import StatusButton from './StatusButton';
import CountedTextArea from './CountedTextArea';
import NewsStatus from './NewsStatus';

const date = new Date();
date.setFullYear(date.getFullYear() - 1);
date.setHours(12, 38);

const floatingLabel = {
    fontSize:20,
    paddingLeft:20
};

const tableHeader = {
    textAlign:'center',
    fontSize: 18,
    height:0
};

const ArticleEdit = React.createClass({

    getInitialState: function () {
        return {
            rubric: '3720054',
            article_type: '3720054',
            olympic: '8339569',
            copyright:'1'
        }
    },
    rubricChange: function (event, index, value) {
        this.setState({
            rubric:value
        });
    },
    copyrightChange: function (event, index, value){
        this.setState({
            copyright:value
        });
    },

    render: function () {
       return <div>
           <NewsStatus articleStatus='removed'/>
           <div id="articleInfo">
               <span className="title autor">Автор статьи:</span> <span>Пётр Васильков</span>
               <span id="viewsCount">Просмотров:71</span>
           </div>
           <div className="space"></div>
           <div className="dropboxes">
               <div>
                    <div className="box-title">
                        Дата
                    </div>
                    <div className="dropbox">
                        <DatePicker defaultDate={date} cancelLabel="Отмена" className="datePicker" name="date" />
                    </div>
               </div>
               <div>
                    <div className="box-title">
                        Время
                    </div>
                    <div className="dropbox">
                        <TimePicker defaultTime={date} cancelLabel="Отмена" format="24hr" className="datePicker"  name="time" />
                    </div>
               </div>
               <div>
                    <div className="box-title">
                        Рубрика
                    </div>
                    <div className="dropbox">
                        <SelectField className="drop" style={{paddingRight:0}} value={this.state.rubric} name="rubric" onChange={this.rubricChange}>
                            <MenuItem value="3720054" primaryText="Сеть вещания"/>
                            <MenuItem value="4403266" primaryText="Видео"/>
                            <MenuItem value="5565836" primaryText="МИРУ 20 ЛЕТ"/>
                            <MenuItem value="6979922" primaryText="Жди меня"/>
                            <MenuItem value="91" primaryText="В мире"/>
                            <MenuItem value="427" primaryText="Экономика"/>
                            <MenuItem value="422" primaryText="Культура"/>
                            <MenuItem value="433" primaryText="Спорт"/>
                            <MenuItem value="445" primaryText="Hi-tech"/>
                            <MenuItem value="3708534" primaryText="Наука"/>
                            <MenuItem value="93" primaryText="Авто"/>
                            <MenuItem value="4993191" primaryText="Вакансии"/>
                            <MenuItem value="10627006" primaryText="Шоу-бизнес"/>
                            <MenuItem value="9332290" primaryText="Чемпионат"/>
                            <MenuItem value="95" primaryText="Общество"/>
                            <MenuItem value="9323848" primaryText="Пресс-релизы"/>
                            <MenuItem value="246" primaryText="Политика"/>
                            <MenuItem value="424" primaryText="Происшествия"/>
                            <MenuItem value="9707131" primaryText="Интерактив"/>
                            <MenuItem value="435" primaryText="В Содружестве"/>
                            <MenuItem value="9186356" primaryText="Кухни мира"/>
                            <MenuItem value="7203542" primaryText="Путеводитель"/>
                            <MenuItem value="484" primaryText="Стиль жизни"/>
                        </SelectField>
                    </div>
               </div>
           </div>
                <div className="checkboxes">
                    <div className="anrgyCheckbox">
                        <Checkbox
                            label="На главной в центре"  defaultChecked={true}
                        />
                    </div>
                    <div>
                        <Checkbox
                            label="Молния"
                        />
                    </div>
                    <div className="anrgyCheckbox">
                    <Checkbox
                            label="На главной странице вверху"
                        />
                    </div>
                    <div>
                        <Checkbox
                            label="Промо"
                        />
                    </div>
                </div>
           <div className='timeContainer'style={{margin: 'auto', height: 66, width: 777}}>
               <div className="time">
                    <div className="timeTitle"><span className="title">Дата начала публикации:</span></div>
                    <DatePicker style={{float:'left', marginRight: 73}} cancelLabel="Отмена" textFieldStyle={{width:140}} defaultDate={date} className="datePicker small" name="date" />
               </div>
               <div className="time">
                    <div className="timeTitle"><span className="title">Дата конца публикации:</span></div>
                    <DatePicker style={{float:'left'}} cancelLabel="Отмена" textFieldStyle={{width:140}} defaultDate={date} className="datePicker small" name="date" />
               </div>
           </div>
           <div className="space"></div>
           <CountedTextArea style={{width:'100%'}} inputStyle={{paddingLeft:10}} value="В США пенсионер застрелил больную жену из-за нехватки денег на лекарства" floatingLabelStyle={floatingLabel} floatingLabelText="Заголовок"/>
           <CountedTextArea style={{width:'100%'}} textareaStyle={{paddingLeft:10}} value="Кэролин более 15 лет страдала от тяжелой формы артрита и других заболеваний. В последние дни ее боли стали невыносимыми, и она не раз говорила супругу, что хочет умереть. Тем не менее Кэролин не просила Хэйгера ее убивать." multiLine={true} floatingLabelStyle={{fontSize:20, paddingLeft:20}} floatingLabelText="Анонс"/>
           <CountedTextArea style={{width:'100%'}} textareaStyle={{paddingLeft:10}}
                            value="В США полиция штата Флорида арестовала пожилого мужчину, который застрелил свою страдавшую от болей жену из-за нехватки средств денег на лекарства, передает _Reuters_.

По данным источника, 86-летний Уильям Хэйгер застрелил 78-летнюю Кэролин глубокой ночью, когда она спала. Вместо того, чтобы сразу набрать 911 и сообщить о содеянном, мужчина сначала позвонил дочерям и рассказал о причинах, которые толкнули его на преступление.

«Я хотел бы извиниться, что не позвонил раньше. Я сперва хотел рассказать, что случилось, нашим с Кэролин детям», - объяснил он полицейским.  По словам Хэйгера, он вынашивал план убийства в течение нескольких дней.

Как пишет Reuters, Кэролин более 15 лет страдала от тяжелой формы артрита и других заболеваний. В последние дни ее боли стали невыносимыми, и она не раз говорила супругу, что хочет умереть. Тем не менее Кэролин не просила Хэйгера ее убивать.

Мужчина пояснил, что пять лет назад пара сообщила властям о банкротстве. Супругам стало не хватать средств на лекарства после недавнего роста цен на них, а обязательная  медицинская страховка стоимость препаратов не покрывала."
                            multiLine={true} floatingLabelStyle={floatingLabel} floatingLabelText="Текст"/>
           <div className="space"></div>
           <div style={{margin:'30px 0 30px 15px'}}>
               <span style={{fontSize:15}}><span className="title">Сюжет:</span><span style={{marginLeft: 32}}>Пенсионер-убийца из Флориды</span></span>
               <FlatButton style={{marginLeft:20}} label="Редактировать" primary={true}/>
           </div>
           <div style={{margin:'30px 0 30px 15px'}}>
               <span style={{fontSize:15}}><span className="title">Связанные новости:</span><span style={{marginLeft: 32}}>В Киевской области пенсионер застрелил жену и покончил с собой</span></span>
               <FlatButton style={{marginLeft:20}} label="Редактировать" primary={true}/>
           </div>
           <div className="space"></div>
           <div style={{margin:'30px 0 30px 15px'}}>
               <span className="title">Изображение: </span>
               <IconButton
                   iconClassName="material-icons"
                   tooltip="На основном сайте мы рекомендуем пользоваться фотобанком"
                   style={{color:'#03A9F4', cursor:'pointer', verticalAlign: 'middle'}}
                   tooltipPosition="top-right"
                   touch={true}
                   disableTouchRipple={true}
               >
                   info_outline
               </IconButton>
               <FlatButton style={{marginLeft:20}} label="Загрузить" primary={true}/>
           </div>
               <div>
                   <TextField defaultValue="В США пенсионер застрелил больную жену из-за нехватки денег на лекарства" inputStyle={{paddingLeft:10, paddingRight:15}} className="textfield" floatingLabelStyle={floatingLabel} style={{width:'50%'}} floatingLabelText="Title для изображения"/>
                   <TextField defaultValue="В США пенсионер застрелил больную жену из-за нехватки денег на лекарства" inputStyle={{paddingLeft:10, paddingRight:15}}className="textfield" floatingLabelStyle={floatingLabel} style={{width:'50%'}} floatingLabelText="Alt для изображения"/>
               </div>
               <div style={{marginTop:30}}>
                   <div>
                       <div style={{fontSize:15, float: 'left', paddingTop: 15, marginLeft:15}}><span className="title">Копирайт:</span></div>
                       <SelectField autoWidth={true} style={{marginLeft:20, float:'left', width:400}} onChange={this.copyrightChange} value={this.state.copyright} name="copyright">
                               <MenuItem value="http://ria.ru/" primaryText="Фото: РИА Новости"/>
                               <MenuItem value="http://www.itar-tass.com/" primaryText="Фото: ИТАР-ТАСС"/>
                               <MenuItem value="1" primaryText="Фото: МТРК «Мир»"/>
                               <MenuItem value="2" primaryText="Фото: Татьяна Майорова (МТРК «Мир»)"/>
                               <MenuItem value="3" primaryText="Фото: Мария Чегляева (МТРК «Мир»)"/>
                               <MenuItem value="4" primaryText="Фото: Елена Раплева (МТРК «Мир»)"/>
                               <MenuItem value="5" primaryText="Фото: Елена Карташова (МТРК «Мир»)"/>
                               <MenuItem value="6" primaryText="Фото: Ксения Сарычева (МТРК «Мир»)"/>
                               <MenuItem value="7" primaryText="Фото: Елена Крайнова (МТРК «Мир»)"/>
                               <MenuItem value="8" primaryText="Фото: Вадим Рабкин (МТРК «Мир»)"/>
                       </SelectField>
                       <TextField  floatingLabelStyle={floatingLabel}
                                   defaultValue='Фото: "Department of Homeland Security":http://www.dhs.gov/'
                                   textareaStyle={{paddingRight:15}} style={{boxSizing:'border-box', paddingRight:15, marginTop:'-24px', width:'700px', paddingLeft:10, marginLeft:15}}
                                   floatingLabelText="Другой копирайт"
                                   className='textfield copy'
                       />
                   </div>
               </div>
               <div className="space"></div>
               <div style={{marginTop:60, marginLeft:15}}>
                   <span className="title">Видео: </span>
                   <FlatButton style={{marginLeft:20}} label="Редактировать" primary={true}/>
                   <div>
                       <Checkbox style={{marginTop:30}}
                           label="Снять с публикации через 36ч."
                       />
                   </div>
               </div>
               <div className="space"></div>
               <Table
                   selectable={false}
                   multiSelectable={false}
               >
                   <TableHeader
                       displaySelectAll={false}
                       adjustForCheckbox={false}
                       style={{border:'none'}}
                   >
                       <TableRow  displayBorder={false}>
                           <TableHeaderColumn style={{textAlign:'center'}}>Филиалы</TableHeaderColumn>
                       </TableRow>
                   </TableHeader>
                   <TableBody displayRowCheckbox={false}>
                       <TableRow  displayBorder={false}>
                           <TableRowColumn>
                               <Checkbox
                                   label="Азербайджан" defaultChecked={true}
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Армения"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Беларусь" defaultChecked={true}
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Грузия"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Казахстан" defaultChecked={true}
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Кыргызстан"
                               />
                           </TableRowColumn>
                       </TableRow>
                       <TableRow>
                           <TableRowColumn>
                               <Checkbox
                                   label="Таджикистан" defaultChecked={true}
                               />
                           </TableRowColumn>
                       </TableRow>
                   </TableBody>
               </Table>
           <div className="geoTags">
               <span className="title">Добавить ГЕО-тег:</span>
               <SelectField autoWidth={true} style={{marginLeft:40, width:400}} onChange={this.copyrightChange} value={this.state.copyright} name="copyright">
                   <MenuItem value="1" primaryText="Азербайджан "/>
                   <MenuItem value="2" primaryText="Армения"/>
                   <MenuItem value="3" primaryText="Беларусь"/>
                   <MenuItem value="4" primaryText="Грузия"/>
                   <MenuItem value="5" primaryText="Казахстан"/>
                   <MenuItem value="6" primaryText="Кыргызстан"/>
                   <MenuItem value="7" primaryText="Молдова"/>
                   <MenuItem value="8" primaryText="Россия"/>
                   <MenuItem value="9" primaryText="Таджикистан "/>
                   <MenuItem value="10" primaryText="Туркменистан "/>
                   <MenuItem value="11" primaryText="Узбекистан "/>
                   <MenuItem value="12" primaryText="Украина"/>
                   <MenuItem value="13" primaryText="Европа"/>
                   <MenuItem value="14" primaryText="США и Канада"/>
                   <MenuItem value="15" primaryText="Латинская Америка"/>
                   <MenuItem value="16" primaryText="Африка"/>
                   <MenuItem value="17" primaryText="Ближний восток"/>
                   <MenuItem value="18" primaryText="Азия"/>
                   <MenuItem value="19" primaryText="Австралия и океания"/>
               </SelectField>
           </div>
           <div className="space"></div>
           <CountedTextArea inputStyle={{paddingLeft:10, paddingRight:15}} style={{width:'100%', marginTop:30}} floatingLabelStyle={floatingLabel} floatingLabelText="Заголовок для страницы Лучшие Новости"/>
           <CountedTextArea inputStyle={{paddingLeft:10, paddingRight:15}} style={{width:'100%'}} floatingLabelStyle={floatingLabel} floatingLabelText="Заголовок для: Выбор редакции, Автомир, Сейчас читают"/>
           <div style={{margin:'30px 0 30px 15px'}}>
               <span className="title">Ролик: </span>
               <FlatButton style={{marginLeft:20}} label="Загрузить" primary={true}/>
               <FlatButton style={{marginLeft:20}} label="Выбрать" secondary={true}/>
           </div>
           <div>
               <TextField floatingLabelStyle={floatingLabel} className="textfield" inputStyle={{paddingLeft:10, paddingRight:15}} style={{width:'50%', boxSizing:'border-box', paddingRight:15}} floatingLabelText="Автор"/>
               <TextField floatingLabelStyle={floatingLabel} className="textfield" inputStyle={{paddingLeft:10, paddingRight:15}} defaultValue="лекарства, застрелил, супруга, пенсионер, сша" style={{width:'50%'}} floatingLabelText="Теги"/>
           </div>
           <div className="space"></div>
               <div className="redaction">
                   <div>
                       <div className="redaction-title">
                           Последним редактировал
                       </div>
                       <div className="redaction-desc">
                           buziatova_tv@mirtv.ru
                       </div>
                   </div>
                   <div>
                       <div className="redaction-title">
                           Создал
                       </div>
                       <div className="redaction-desc">
                           rakovich_iv@mirtv.ru
                       </div>
                   </div>
                   <div>
                       <div className="redaction-title">
                           Редактировал видео
                       </div>
                       <div className="redaction-desc">
                           Не определен
                       </div>
                   </div>
                   <div>
                       <div className="redaction-title">
                           Редактировал изображение
                       </div>
                       <div className="redaction-desc">
                           Не определен
                       </div>
                   </div>
               </div>
               <div className="space"></div>
           <div style={{marginTop:30, marginBottom:50, textAlign:'center'}}>
                <StatusButton />
                <RaisedButton labelColor='#FFF' backgroundColor='#66BB6A' style={{marginRight:20}} label="Сохранить"/>
                <RaisedButton labelColor='#FFF' backgroundColor='#EF5350' style={{marginRight:20}} label="Удалить"/>
                <RaisedButton labelColor='#FFF' backgroundColor='#1EA3E3' label="Посмотреть на сайте"/>
           </div>
       </div>
    }
});

export default ArticleEdit;