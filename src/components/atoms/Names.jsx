/* eslint-disable indent */
import React from 'react';
import glamorous from 'glamorous';

const Svg = glamorous.svg(`
  z-5
  sm:w-2/3
  lg:w-1/2
  xl:w-1/2
  mt-6
`, {
  height: 'auto',
  width: '90%',
});

const Names = () => (
  <Svg viewBox="0 0 350 186" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M127.232 159c0-.12 1.248-1.272 2.064-3.192-2.376-1.248-4.296-3.288-4.296-5.328 0-1.392 1.272-2.976 2.568-2.976 1.68 0 2.832 2.256 2.832 4.968 0 1.032-.24 2.064-.6 2.976a8.543 8.543 0 0 0 1.56.768c2.64-3.696 7.056-6.744 9.912-6.744.84 0 1.632.552 1.632 1.44 0 3.096-3.648 6.12-9.12 6.12-.432 0-.888-.024-1.344-.12-1.128 1.776-1.896 3.576-1.896 5.016 0 2.496 1.584 3.12 2.904 3.12 3.048 0 5.904-3.864 5.904-5.472 0-.6-.336-.96-.936-.96-1.176 0-2.256 1.416-2.256 2.112 0 .24-.336.528-.672.528-.072 0-.12-.048-.12-.192 0-.552 1.752-3.024 3.456-3.024.648 0 1.128.48 1.128 1.296 0 2.256-3.696 6.288-6.816 6.288-1.776 0-4.032-.816-4.032-3.504 0-1.8.792-3.744 1.992-5.544a12.86 12.86 0 0 1-1.488-.6c-.816 1.944-2.04 3.36-2.16 3.36-.072 0-.216-.192-.216-.336zm13.848-9.216c-2.256 0-6.048 3.288-8.424 6.816.384.072.744.096 1.104.096 4.32 0 8.16-2.952 8.16-6.216 0-.456-.336-.696-.84-.696zm-13.752-1.776c-.696 0-1.296.648-1.296 1.824 0 2.088 1.512 4.104 3.456 5.424.288-.84.504-1.776.504-2.832 0-2.232-1.296-4.416-2.664-4.416zm14.736 14.376c.48 0 2.232-.936 3.816-2.184.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.272 1.056-3.336 2.448-4.512 2.448-.576 0-1.128-.408-1.128-1.2 0-2.64 6-11.04 8.424-11.04.36 0 .624.216.624.6 0 2.688-6.12 7.752-7.32 8.568-.36.432-.6 1.392-.6 2.064 0 .408.192.576.48.576zm6.72-11.352c-.96 0-5.712 6.456-6.456 8.208 2.112-1.632 6.72-5.952 6.72-7.896 0-.264-.096-.312-.264-.312zm2.352 10.44c.384 0 .648-.024 2.232-1.272.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.472 1.608-3.144 1.608-1.272 0-1.128-1.44-1.488-1.44-.36 0-1.92 2.16-3.264 2.16-.36 0-.744-.288-.744-.6 0-1.944 3.096-4.776 4.848-4.776.408 0 .744.408.744.84 0 .24-.336.816-.504.816-.072 0-.168-.096-.168-.192 0-.168.408-.312.408-.744 0-.192-.192-.36-.456-.36-1.128 0-3.864 2.736-3.864 4.296 0 .168.096.264.24.264.48 0 1.632-1.104 2.304-1.824.624-.672.792-.96 1.152-.96.816 0 .528 2.016 1.488 2.016zm8.448-1.272c.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-3.024 2.472-4.2 2.472-.6 0-1.32-.216-1.32-1.08 0-1.296 2.088-2.376 2.088-2.664 0-.12-.312-.312-.624-.624-.648.672-1.44 1.344-2.232 1.944-.12.096-.168.12-.216.12-.072 0-.12-.048-.12-.12 0-.048.048-.096.192-.216.768-.576 1.584-1.248 2.232-1.896-.288-.312-.528-.72-.528-1.248 0-.984 1.2-1.872 1.824-1.872.288 0 .528.312.528.648 0 .6-.48 1.32-1.176 2.112.216.6.624.84.624 1.128 0 .648-1.512 1.704-1.512 2.904 0 .36.216.528.552.528.792 0 2.088-1.056 3.672-2.304zm-3.432-3.048c0 .192.024.336.048.48.528-.624.864-1.224.864-1.68 0-.24-.072-.384-.312-.384-.264 0-.6.408-.6 1.584zm6.984.552c0 .6-1.584 1.872-2.52 2.4v.36c0 .456.264 1.08 1.32 1.08.552 0 1.392-.096 2.976-1.344.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.832 1.752-3.768 1.752-1.176 0-1.872-.696-1.872-1.752 0-1.44 1.584-3.456 2.856-3.456.408 0 .792.432.792.792zm-2.448 2.064c.264-.072 2.016-1.584 2.016-2.112 0-.144-.096-.264-.264-.264-.696 0-1.752 1.752-1.752 2.376zm13.152-4.128c0-.168.768-1.008 1.704-1.008 2.232 0 4.008 2.856 4.008 5.808 0 2.328-1.2 3.552-3.216 3.552-4.2 0-6.96-4.008-6.96-7.824 0-4.104 3.816-7.08 8.16-7.08 2.592 0 5.856 1.296 7.128 1.464.36-.456 1.464-1.44 2.04-1.44a.38.38 0 0 1 .384.384c0 .696-1.104 1.08-1.632 1.32-1.8 2.52-2.352 5.376-2.4 11.256 1.68-1.656 3.624-3.432 5.16-5.112-.048-.552-.048-1.104-.048-1.632 0-2.712 1.344-3.816 2.112-3.816.576 0 1.008.48 1.008 1.056 0 1.128-.816 2.496-1.992 3.936.048 1.824.192 3.336.288 4.656 2.856-3.936 7.296-8.688 7.296-12.336 0-1.392-.624-1.584-.984-1.584-.192 0-.288.072-.384.072-.048 0-.12-.072-.12-.12 0-.072.336-.264.696-.264.864 0 1.992.552 1.992 2.184 0 3.72-5.376 8.88-8.424 12.864.024.456.048.912.048 1.344 0 2.112-1.056 3.48-1.776 3.48-.336 0-.696-.264-.696-.816 0-1.008.624-2.256 1.536-3.648-.12-1.08-.384-2.832-.504-4.632-1.608 1.776-3.6 3.576-5.208 5.208-.024 3.216-1.56 5.184-2.592 5.184-.6 0-1.008-.432-1.008-.912 0-1.032 1.008-2.4 2.448-3.936.024-7.344.552-10.368 2.424-12.312-3-.072-5.328-1.32-7.92-1.32-2.856 0-5.952 2.232-5.952 6.672 0 3.288 2.808 7.392 6 7.392 1.656 0 2.4-1.128 2.4-2.664 0-3.792-2.52-5.856-3.648-5.856-.696 0-1.104.6-1.224.6-.072 0-.144-.048-.144-.12zm6.576 12c.624 0 1.392-1.896 1.488-3.528-1.176 1.248-1.968 2.328-1.968 3.072 0 .288.216.456.48.456zm8.88-12v.048c.888-1.128 1.464-2.184 1.464-3.048 0-.288-.096-.504-.264-.504-.48 0-1.2.84-1.2 3.504zm-.456 7.656v-.192c-.792 1.128-1.272 2.136-1.272 2.928 0 .24.168.384.384.384.504 0 .888-1.368.888-3.12zm10.368-1.824c.384 0 .648-.024 2.232-1.272.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.472 1.608-3.144 1.608-1.272 0-1.128-1.44-1.488-1.44-.36 0-1.92 2.16-3.264 2.16-.36 0-.744-.288-.744-.6 0-1.944 3.096-4.776 4.848-4.776.408 0 .744.408.744.84 0 .24-.336.816-.504.816-.072 0-.168-.096-.168-.192 0-.168.408-.312.408-.744 0-.192-.192-.36-.456-.36-1.128 0-3.864 2.736-3.864 4.296 0 .168.096.264.24.264.48 0 1.632-1.104 2.304-1.824.624-.672.792-.96 1.152-.96.816 0 .528 2.016 1.488 2.016zm3.672-7.224c.096 0 .552.456 1.68.624.216-.312.384-.6.504-.792.36-.6.528-1.032.672-1.2.216-.264.6-.36.792-.36.168 0 .24.072.24.216 0 .384-.456 1.2-1.104 2.184 1.176-.024 1.656-.264 1.8-.264.072 0 .168.072.168.168 0 .12-.96.384-2.16.408-1.656 2.496-4.248 6-4.248 7.44 0 .336.096.456.336.456.432 0 2.712-1.68 4.296-2.928.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-3.912 3.024-4.8 3.024-.528 0-1.008-.552-1.008-1.032 0-1.176 2.64-4.992 4.08-7.152-1.32-.072-1.824-.312-1.824-.456 0-.168.264-.504.36-.504zm7.728 6.12c-.576.456-1.272.816-2.016 1.128-.384 1.392-1.416 2.736-2.568 2.736-.6 0-1.224-.432-1.224-.96 0-.648 1.368-1.08 2.88-1.632.192-.96.288-2.064.384-2.976-.576.576-1.272 1.128-1.968 1.68-.12.096-.168.12-.216.12-.072 0-.12-.048-.12-.12 0-.048.048-.096.192-.216.768-.576 1.536-1.2 2.16-1.824 0-.144.024-.264.048-.384.096-.72.936-1.32 1.512-1.32.144 0 .216.12.216.264 0 .24-.696 1.008-1.128 1.464.024.576.024 1.368.024 1.968 0 .312-.048.624-.12.936a8.033 8.033 0 0 0 1.728-1.032c.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24zm-5.256 2.976c0 .36.312.624.696.624.816 0 1.296-.912 1.56-2.088-1.224.456-2.256.84-2.256 1.464zm11.256-3.144c.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-.672.6-2.136 1.368-3.192 1.368h-.168c-.648.72-1.416 1.248-2.04 1.248-.744 0-1.464-.528-1.464-1.344 0-1.752 2.376-4.416 4.248-4.416.576 0 .984.384.984.912 0 .888-.552 2.088-1.296 3.096a.602.602 0 0 0 .24.048c.96 0 1.728-.48 2.472-1.08zm-2.376-2.688c-1.152 0-3.24 2.784-3.24 4.248 0 .384.216.744.576.744s.936-.336 1.464-.888c-.144-.072-.264-.168-.264-.264 0-.144.408-.552.6-.552.096 0 .168.072.24.144.576-.792 1.032-1.776 1.032-2.76 0-.48-.168-.672-.408-.672zm3.24 3.336c.384-.288 3.672-3.24 4.608-3.24.288 0 .696.312.696.552 0 .936-1.512 2.232-1.512 3.84 0 .264.096.432.312.432.456 0 1.848-1.008 3.432-2.256.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-3.264 2.472-4.2 2.472-.36 0-.936-.192-.936-.96 0-1.752 1.848-3.024 1.848-3.768a.103.103 0 0 0-.096-.096c-.864 0-4.848 4.032-5.664 4.032-.12 0-.336-.312-.336-.48 0-.432 1.2-2.784 2.424-4.104.504-.552 1.152-.912 1.512-.912.048 0 .12.096.12.144 0 .024-.36.312-.84 1.008-.48.72-1.416 2.664-1.584 3.168zm-80.116-26.904c0 2.352-2.088 4.392-5.496 4.416-1.608.024-3-.264-4.2-.648l-.36-4.248h.96l1.008 3.312c.792.36 2.016.648 2.952.648 2.184-.024 3.36-1.368 3.36-2.832 0-1.992-1.464-2.664-3.768-3.528-2.328-.888-4.2-1.8-4.2-4.32 0-2.136 1.608-4.056 4.944-4.08a11.49 11.49 0 0 1 2.808.264l1.248-.36v4.728h-.96l-.672-3.072c-.792-.36-1.872-.6-2.736-.6-1.944 0-2.904 1.2-2.904 2.496 0 1.944 1.584 2.568 3.696 3.384 2.424.888 4.32 1.8 4.32 4.44zm11.664 2.928c-.744.912-1.464 1.488-2.232 1.488-.864 0-1.536-.528-1.536-1.776h-.096c-.912.984-1.848 1.776-3 1.776-1.584 0-2.928-1.176-2.928-2.784 0-2.016 1.824-3.12 6.12-4.176v-.216c.024-2.568-.888-3.24-2.448-3.24-.912 0-1.896.384-1.896.624 0 .12.48.504.48 1.104 0 .552-.48 1.08-1.176 1.08-.672 0-1.152-.432-1.152-1.056 0-1.152 2.496-2.784 4.44-2.784 2.664 0 3.6 1.08 3.456 4.68l-.192 4.584c-.024.552.168.84.528.84.336 0 .72-.264 1.224-.672l.408.528zm-3.864-1.104l.144-3.6c-3.216.84-4.32 1.728-4.32 3 0 1.152.816 1.848 1.824 1.848.84 0 1.56-.528 2.352-1.248zM168.004 138h-5.04l.072-.816.936-.096c.504-.024.6-.144.6-.36v-5.304c0-2.328-.96-3.024-2.208-3.024-.984 0-2.016.624-2.688 1.224.024.168.024 1.248.024 1.416v5.688c0 .192.072.312.696.36l1.008.096.072.816h-5.112l.072-.816.936-.096c.504-.024.6-.144.6-.36v-5.304c0-2.328-.96-3.024-2.208-3.024-.984 0-2.016.624-2.664 1.176v7.176c0 .192.096.312.648.336l1.152.096.072.816h-5.232l.072-.816.96-.096c.432-.024.6-.12.6-.36v-6.744c0-1.152-.144-1.296-.792-1.464l-.96-.144.024-.648 3.456-.792v1.728h.072c1.176-1.008 2.424-1.728 3.672-1.728.696 0 1.44.24 1.944.72.312.312.552.72.696 1.176h.096c1.2-1.104 2.544-1.896 3.816-1.896.744 0 1.488.24 2.016.768.6.6.888 1.488.888 2.616v6.408c0 .192.072.312.696.36l.936.096.072.816zm11.112-1.128c-.744.912-1.464 1.488-2.232 1.488-.864 0-1.536-.528-1.536-1.776h-.096c-.912.984-1.848 1.776-3 1.776-1.584 0-2.928-1.176-2.928-2.784 0-2.016 1.824-3.12 6.12-4.176v-.216c.024-2.568-.888-3.24-2.448-3.24-.912 0-1.896.384-1.896.624 0 .12.48.504.48 1.104 0 .552-.48 1.08-1.176 1.08-.672 0-1.152-.432-1.152-1.056 0-1.152 2.496-2.784 4.44-2.784 2.664 0 3.6 1.08 3.456 4.68l-.192 4.584c-.024.552.168.84.528.84.336 0 .72-.264 1.224-.672l.408.528zm-3.864-1.104l.144-3.6c-3.216.84-4.32 1.728-4.32 3 0 1.152.816 1.848 1.824 1.848.84 0 1.56-.528 2.352-1.248zm16.56 2.232H186.7l.072-.816.984-.096c.504-.024.6-.144.6-.36v-5.232c0-2.376-.864-3.096-2.304-3.096-1.104 0-2.184.648-2.856 1.2v7.152c0 .192.096.312.648.336l1.104.096.072.816h-5.184l.072-.816.96-.096c.432-.024.6-.12.6-.36v-6.792c0-1.104-.12-1.248-.744-1.416l-1.008-.144.024-.648 3.456-.792v1.728h.12c1.224-1.032 2.496-1.728 3.84-1.728.72 0 1.488.24 2.016.768.624.624.888 1.512.888 2.664v6.36c0 .192.096.312.72.36l.96.096.072.816zm8.088-1.008c-.768.792-1.992 1.368-3.048 1.368-1.632 0-2.76-.912-2.736-3.12l.144-6.768-1.896-.096.024-.696 1.632-.984 1.128-1.512.84.096-.024 2.04h3.888l-.168 1.104h-3.72l-.144 6.384c-.048 1.584.648 2.184 1.92 2.184.648 0 1.368-.264 2.016-.624l.144.624zM212.74 138h-5.088l.072-.816.984-.096c.504-.024.6-.144.6-.36v-5.232c0-2.376-.864-3.096-2.304-3.096-1.104 0-2.184.648-2.856 1.2v7.152c0 .192.096.312.648.336l1.104.096.072.816h-5.184l.072-.816.96-.096c.432-.024.6-.12.6-.36v-12.96c0-.312-.072-.456-.264-.504l-1.68-.528.072-.6 3.6-.864v7.392h.12c1.224-1.032 2.496-1.728 3.84-1.728.72 0 1.488.24 2.016.768.624.624.888 1.512.888 2.664v6.36c0 .192.096.312.72.36l.936.096.072.816zm10.992-1.128c-.744.912-1.464 1.488-2.232 1.488-.864 0-1.536-.528-1.536-1.776h-.096c-.912.984-1.848 1.776-3 1.776-1.584 0-2.928-1.176-2.928-2.784 0-2.016 1.824-3.12 6.12-4.176v-.216c.024-2.568-.888-3.24-2.448-3.24-.912 0-1.896.384-1.896.624 0 .12.48.504.48 1.104 0 .552-.48 1.08-1.176 1.08-.672 0-1.152-.432-1.152-1.056 0-1.152 2.496-2.784 4.44-2.784 2.664 0 3.6 1.08 3.456 4.68l-.192 4.584c-.024.552.168.84.528.84.336 0 .72-.264 1.224-.672l.408.528zm-3.864-1.104l.144-3.6c-3.216.84-4.32 1.728-4.32 3 0 1.152.816 1.848 1.824 1.848.84 0 1.56-.528 2.352-1.248z" fill="#000"/>
      <path d="M150 89.5v1H-.5v-1H150zm51 0h149.5v1H201v-1z" stroke="#40E0D0" strokeLinecap="square" />
      <path d="M181.756 94.8c-.936.984-1.872 1.584-3 1.584-1.608 0-2.568-1.032-3.528-3.072-1.224 1.584-3 3.048-5.136 3.048-2.688 0-4.248-1.872-4.248-3.936 0-1.992 1.536-3.696 3.528-4.464-1.368-.648-2.304-1.848-2.304-3.384 0-2.064 1.752-3.888 4.392-3.888 2.352 0 3.744 1.536 3.744 3.192 0 1.464-.936 2.904-3.072 3.768 1.488.648 2.952 1.944 3.792 3.384 0 0 1.68-2.304 1.704-2.712.024-.264-.168-.408-.528-.456l-.84-.12-.048-.792h5.016l-.096.792-.768.12c-.624.168-1.32.528-1.824 1.224 0 0-2.136 2.712-2.136 2.736 1.104 2.208 1.824 3.12 3.048 3.12.6 0 1.248-.36 1.944-.768l.36.624zm-8.28-10.656c0-1.32-.864-2.544-2.352-2.544-1.512 0-2.472 1.104-2.472 2.376 0 1.584.912 2.568 2.688 3.312 1.464-.672 2.136-1.728 2.136-3.144zm1.296 8.304c-1.176-2.256-2.688-3.24-4.68-4.056-1.488.768-2.472 1.92-2.472 3.384-.024 1.68 1.416 3.12 3.336 3.12 1.272 0 2.664-.864 3.816-2.448zm-69.54-46.368c-.648 0-2.736-1.056-2.736-2.76 0-3.096 5.52-4.536 7.704-6.144.624-1.56 1.56-2.088 2.232-2.088.288 0 .456.192.456.456 0 .36-.384.768-.864 1.176-.36.312-.792.528-.984 1.128-1.8 5.88-6.936 19.872-13.824 19.872-2.4 0-3.768-1.824-3.768-4.464 0-4.536 3.552-8.592 6.312-8.592 1.272 0 1.992 1.008 1.992 3 0 .12 0 .24-.024.36.912-.336 1.704-.552 2.208-.552.24 0 .528.312.528.48 0 .096-.096.144-.288.144-.84 0-1.68.168-2.52.456-.48 2.64-3 5.736-4.824 5.736-.552 0-.888-.408-.888-.936 0-1.968 2.52-3.816 4.8-4.92.048-.264.072-.504.072-.768 0-1.44-.36-2.544-1.512-2.544-1.968 0-5.424 3.936-5.424 8.304 0 2.184 1.272 3.816 3.384 3.816 5.448 0 10.752-14.064 12.72-19.368-2.688 1.584-6.384 3.336-6.384 5.688 0 1.68 1.752 2.28 1.752 2.376 0 .072-.048.144-.12.144zm-8.256 7.632c1.296 0 3.168-2.352 3.696-4.776-2.352 1.056-4.272 2.88-4.272 3.984 0 .624.24.792.576.792zm17.928-6.24c.384 0 .648-.024 2.232-1.272.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.472 1.608-3.144 1.608-1.272 0-1.128-1.44-1.488-1.44-.36 0-1.92 2.16-3.264 2.16-.36 0-.744-.288-.744-.6 0-1.944 3.096-4.776 4.848-4.776.408 0 .744.408.744.84 0 .24-.336.816-.504.816-.072 0-.168-.096-.168-.192 0-.168.408-.312.408-.744 0-.192-.192-.36-.456-.36-1.128 0-3.864 2.736-3.864 4.296 0 .168.096.264.24.264.48 0 1.632-1.104 2.304-1.824.624-.672.792-.96 1.152-.96.816 0 .528 2.016 1.488 2.016zm2.856-.72c.144 0 3.432-3.288 5.088-3.288.384 0 .672.336.672.6 0 .408-1.8 2.304-1.8 2.568 0 .048.024.072.072.072.408 0 2.328-1.728 2.976-1.728.288 0 .552.168.552.408 0 .552-.312 1.08-.312 1.536 0 .432.264.84.888.84.72 0 1.344-.312 2.928-1.56.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.616 1.8-3.648 1.8-.744 0-1.296-.456-1.296-1.248 0-.456.12-.888.12-1.032 0-.072-.024-.192-.144-.192-.336 0-2.76 1.968-3.264 1.968-.216 0-.504-.216-.504-.36 0-1.08 2.352-3.024 2.352-3.408 0-.072-.048-.12-.144-.12-.768 0-3.192 2.016-4.68 3.336-.768.696-.912 1.152-1.416 1.152-.192 0-.288-.144-.288-.288 0-.24 1.416-3 2.52-4.176.408-.456.84-.6 1.2-.6.144 0 .288.024.288.12 0 .168-.48.528-.912 1.056-.696.84-1.344 1.968-1.464 2.376zm14.616-3.048c0 .6-1.584 1.872-2.52 2.4v.36c0 .456.264 1.08 1.32 1.08.552 0 1.392-.096 2.976-1.344.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.832 1.752-3.768 1.752-1.176 0-1.872-.696-1.872-1.752 0-1.44 1.584-3.456 2.856-3.456.408 0 .792.432.792.792zm-2.448 2.064c.264-.072 2.016-1.584 2.016-2.112 0-.144-.096-.264-.264-.264-.696 0-1.752 1.752-1.752 2.376zm8.976.6c-.576.456-1.272.816-2.016 1.128-.384 1.392-1.416 2.736-2.568 2.736-.6 0-1.224-.432-1.224-.96 0-.648 1.368-1.08 2.88-1.632.192-.96.288-2.064.384-2.976-.576.576-1.272 1.128-1.968 1.68-.12.096-.168.12-.216.12-.072 0-.12-.048-.12-.12 0-.048.048-.096.192-.216.768-.576 1.536-1.2 2.16-1.824 0-.144.024-.264.048-.384.096-.72.936-1.32 1.512-1.32.144 0 .216.12.216.264 0 .24-.696 1.008-1.128 1.464.024.576.024 1.368.024 1.968 0 .312-.048.624-.12.936a8.033 8.033 0 0 0 1.728-1.032c.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24zm-5.256 2.976c0 .36.312.624.696.624.816 0 1.296-.912 1.56-2.088-1.224.456-2.256.84-2.256 1.464zM145.24 45c0-.12 1.248-1.272 2.064-3.192-2.376-1.248-4.296-3.288-4.296-5.328 0-1.392 1.272-2.976 2.568-2.976 1.68 0 2.832 2.256 2.832 4.968 0 1.032-.24 2.064-.6 2.976a8.543 8.543 0 0 0 1.56.768c2.64-3.696 7.056-6.744 9.912-6.744.84 0 1.632.552 1.632 1.44 0 3.096-3.648 6.12-9.12 6.12-.432 0-.888-.024-1.344-.12-1.128 1.776-1.896 3.576-1.896 5.016 0 2.496 1.584 3.12 2.904 3.12 3.048 0 5.904-3.864 5.904-5.472 0-.6-.336-.96-.936-.96-1.176 0-2.256 1.416-2.256 2.112 0 .24-.336.528-.672.528-.072 0-.12-.048-.12-.192 0-.552 1.752-3.024 3.456-3.024.648 0 1.128.48 1.128 1.296 0 2.256-3.696 6.288-6.816 6.288-1.776 0-4.032-.816-4.032-3.504 0-1.8.792-3.744 1.992-5.544a12.86 12.86 0 0 1-1.488-.6c-.816 1.944-2.04 3.36-2.16 3.36-.072 0-.216-.192-.216-.336zm13.848-9.216c-2.256 0-6.048 3.288-8.424 6.816.384.072.744.096 1.104.096 4.32 0 8.16-2.952 8.16-6.216 0-.456-.336-.696-.84-.696zm-13.752-1.776c-.696 0-1.296.648-1.296 1.824 0 2.088 1.512 4.104 3.456 5.424.288-.84.504-1.776.504-2.832 0-2.232-1.296-4.416-2.664-4.416zm19.8 12.192c.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-.672.6-2.136 1.368-3.192 1.368h-.168c-.648.72-1.416 1.248-2.04 1.248-.744 0-1.464-.528-1.464-1.344 0-1.752 2.376-4.416 4.248-4.416.576 0 .984.384.984.912 0 .888-.552 2.088-1.296 3.096a.602.602 0 0 0 .24.048c.96 0 1.728-.48 2.472-1.08zm-2.376-2.688c-1.152 0-3.24 2.784-3.24 4.248 0 .384.216.744.576.744s.936-.336 1.464-.888c-.144-.072-.264-.168-.264-.264 0-.144.408-.552.6-.552.096 0 .168.072.24.144.576-.792 1.032-1.776 1.032-2.76 0-.48-.168-.672-.408-.672zm3.528 4.872c.48 0 2.232-.936 3.816-2.184.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.272 1.056-3.336 2.448-4.512 2.448-.576 0-1.128-.408-1.128-1.2 0-2.64 6-11.04 8.424-11.04.36 0 .624.216.624.6 0 2.688-6.12 7.752-7.32 8.568-.36.432-.6 1.392-.6 2.064 0 .408.192.576.48.576zm6.72-11.352c-.96 0-5.712 6.456-6.456 8.208 2.112-1.632 6.72-5.952 6.72-7.896 0-.264-.096-.312-.264-.312zm.648 6.672c0 .6-1.584 1.872-2.52 2.4v.36c0 .456.264 1.08 1.32 1.08.552 0 1.392-.096 2.976-1.344.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.832 1.752-3.768 1.752-1.176 0-1.872-.696-1.872-1.752 0-1.44 1.584-3.456 2.856-3.456.408 0 .792.432.792.792zm-2.448 2.064c.264-.072 2.016-1.584 2.016-2.112 0-.144-.096-.264-.264-.264-.696 0-1.752 1.752-1.752 2.376zm10.44.432c.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-3.024 2.472-4.2 2.472-.6 0-1.32-.216-1.32-1.08 0-1.296 2.088-2.376 2.088-2.664 0-.12-.312-.312-.624-.624-.648.672-1.44 1.344-2.232 1.944-.12.096-.168.12-.216.12-.072 0-.12-.048-.12-.12 0-.048.048-.096.192-.216.768-.576 1.584-1.248 2.232-1.896-.288-.312-.528-.72-.528-1.248 0-.984 1.2-1.872 1.824-1.872.288 0 .528.312.528.648 0 .6-.48 1.32-1.176 2.112.216.6.624.84.624 1.128 0 .648-1.512 1.704-1.512 2.904 0 .36.216.528.552.528.792 0 2.088-1.056 3.672-2.304zm-3.432-3.048c0 .192.024.336.048.48.528-.624.864-1.224.864-1.68 0-.24-.072-.384-.312-.384-.264 0-.6.408-.6 1.584zm7.488-2.616c.216 0 .576.168.576.336 0 .432-.6.96-1.104.96-.24 0-.408-.168-.408-.336 0-.504.696-.96.936-.96zm-3.096 7.512c.624 0 1.512-.6 3.096-1.848.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.904 2.064-3.648 2.064-.528 0-.96-.312-.96-.96 0-1.392 2.4-4.2 2.928-4.2.384 0 .576.12.576.24s-.12.216-.336.456c-1.152 1.344-2.256 2.808-2.256 3.672 0 .24.12.408.384.408zm7.32-2.16c-1.224 1.224-2.712 3.024-3.84 3.024-.408 0-.912-.456-.912-1.056 0-1.512 2.52-4.176 3.96-4.176.576 0 .84.384.936.528 0 0 .12-.624.264-1.032 1.104-3.36 3.24-6.792 4.92-6.792.312 0 .552.288.552.672 0 1.056-2.88 5.208-4.848 7.272-.144.648-.168 1.56-.168 1.944 0 .696.264 1.512.696 1.512.312 0 1.008-.336 2.592-1.584.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.712 1.848-3.168 1.848-.912 0-1.2-1.152-1.2-2.328zm.12-1.104c0-.024 0-.12-.048-.12-.072 0-.072.096-.216.096-.12 0-.096-.192-.096-.24 0-.36-.144-.456-.432-.456-1.368 0-3.12 2.832-3.12 4.224 0 .168.096.264.24.264.696 0 3.672-3.072 3.672-3.768zm1.344-1.392c.672-.696 4.152-5.328 4.152-6.336 0-.192-.096-.288-.264-.288-1.104 0-3.888 6-3.888 6.624zm-2.064 12.36c0-1.776 3.528-3.48 7.056-5.664.672-1.536 1.128-3 1.128-4.08-.192.216-1.848 2.184-3.096 2.184a.773.773 0 0 1-.768-.768c0-1.92 3.048-4.272 4.728-4.272.432 0 .864.312.864.84 0 .312-.192.576-.264.576-.072 0-.264-.168-.264-.24 0-.144.144-.24.144-.504 0-.192-.144-.36-.48-.36-1.368 0-3.744 2.568-3.744 3.936 0 .216.12.36.288.36.432 0 1.488-1.056 2.28-1.848.384-.384.72-.576.984-.576.408 0 .6.312.6.768 0 .768-.264 1.8-.696 2.88a42.597 42.597 0 0 0 3.504-2.784c.168-.144.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.2 1.104-2.544 2.136-3.912 3.072-1.512 3.432-4.68 7.44-7.464 7.44a1.105 1.105 0 0 1-1.104-1.128zm1.296.744c1.848 0 4.128-2.976 5.568-5.952-3.456 2.16-6.504 3.672-6.504 5.064 0 .6.432.888.936.888zm14.544-12.792c0 .6-1.584 1.872-2.52 2.4v.36c0 .456.264 1.08 1.32 1.08.552 0 1.392-.096 2.976-1.344.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.832 1.752-3.768 1.752-1.176 0-1.872-.696-1.872-1.752 0-1.44 1.584-3.456 2.856-3.456.408 0 .792.432.792.792zm-2.448 2.064c.264-.072 2.016-1.584 2.016-2.112 0-.144-.096-.264-.264-.264-.696 0-1.752 1.752-1.752 2.376zm25.152-10.248c0 1.224-1.224 2.952-2.952 4.872a72.052 72.052 0 0 0-.072 3.048c0 4.128-3 8.544-6.552 8.544-1.272 0-2.496-.48-3.552-1.296-1.128 1.44-1.824 2.808-1.824 4.056 0 .792.312 1.728 1.488 1.728.096 0 .168.024.168.12 0 .12-.12.192-.384.192-1.296 0-2.256-.936-2.256-2.184 0-1.368.888-2.856 2.232-4.416-1.728-1.656-2.904-4.296-2.904-7.392 0-4.56 1.896-5.952 3.912-5.952 1.128 0 2.28.84 3.24 2.04.696-.456 1.44-.696 2.184-.696.12 0 .192.024.192.144 0 .144-.312.48-.528.48-.48 0-1.008.192-1.536.504.96 1.344 1.68 3.072 1.944 4.656l.648-.576c.84-.768 1.632-1.56 2.328-2.328.84-5.184 1.968-6.528 3.312-6.528.528 0 .912.48.912.984zm-15.936 6.264c0 3.312 1.032 6.168 2.664 7.896.528-.6 1.128-1.176 1.752-1.776-.432-.696-.696-1.656-.696-2.904 0-2.664.96-4.608 2.232-5.712-.888-1.32-1.992-2.112-3-2.112-1.32 0-2.952 1.44-2.952 4.608zm11.472 1.056l.144-1.032-2.064 2.016-.72.672c.024.288.048.552.048.816 0 2.4-1.2 3.864-2.4 3.864-.624 0-1.2-.264-1.68-.768-.576.6-1.128 1.2-1.608 1.776.984.84 2.136 1.32 3.384 1.32 3 0 4.32-4.248 4.896-8.664zm-3.744 2.04c-.12-2.016-.696-3.816-1.488-5.136-1.152 1.008-2.088 2.856-2.088 5.4 0 1.032.24 1.872.576 2.448.96-.888 1.992-1.8 3-2.712zm5.304-6.168c0 .144 0 .456-.024.84 1.248-1.584 2.04-3 2.04-4.008 0-.432-.12-.6-.336-.6-.72 0-1.68 1.56-1.68 3.768zm-6.672 10.008c.816 0 1.416-1.44 1.416-2.952v-.264a68.788 68.788 0 0 0-2.664 2.592c.384.408.816.624 1.248.624zm7.656-1.968c.144 0 3.432-3.288 5.088-3.288.384 0 .672.336.672.6 0 .408-1.8 2.304-1.8 2.568 0 .048.024.072.072.072.408 0 2.328-1.728 2.976-1.728.288 0 .552.168.552.408 0 .552-.312 1.08-.312 1.536 0 .432.264.84.888.84.72 0 1.344-.312 2.928-1.56.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.616 1.8-3.648 1.8-.744 0-1.296-.456-1.296-1.248 0-.456.12-.888.12-1.032 0-.072-.024-.192-.144-.192-.336 0-2.76 1.968-3.264 1.968-.216 0-.504-.216-.504-.36 0-1.08 2.352-3.024 2.352-3.408 0-.072-.048-.12-.144-.12-.768 0-3.192 2.016-4.68 3.336-.768.696-.912 1.152-1.416 1.152-.192 0-.288-.144-.288-.288 0-.24 1.416-3 2.52-4.176.408-.456.84-.6 1.2-.6.144 0 .288.024.288.12 0 .168-.48.528-.912 1.056-.696.84-1.344 1.968-1.464 2.376zm15.12-6.216c.216 0 .576.168.576.336 0 .432-.6.96-1.104.96-.24 0-.408-.168-.408-.336 0-.504.696-.96.936-.96zm-3.096 7.512c.624 0 1.512-.6 3.096-1.848.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.904 2.064-3.648 2.064-.528 0-.96-.312-.96-.96 0-1.392 2.4-4.2 2.928-4.2.384 0 .576.12.576.24s-.12.216-.336.456c-1.152 1.344-2.256 2.808-2.256 3.672 0 .24.12.408.384.408zm4.536-7.8c.096 0 .552.456 1.68.624.216-.312.384-.6.504-.792.36-.6.528-1.032.672-1.2.216-.264.6-.36.792-.36.168 0 .24.072.24.216 0 .384-.456 1.2-1.104 2.184 1.176-.024 1.656-.264 1.8-.264.072 0 .168.072.168.168 0 .12-.96.384-2.16.408-1.656 2.496-4.248 6-4.248 7.44 0 .336.096.456.336.456.432 0 2.712-1.68 4.296-2.928.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-3.912 3.024-4.8 3.024-.528 0-1.008-.552-1.008-1.032 0-1.176 2.64-4.992 4.08-7.152-1.32-.072-1.824-.312-1.824-.456 0-.168.264-.504.36-.504zm3.552 7.296c1.584-1.68 4.08-4.296 5.592-4.296.336 0 .696.336.696.792 0 .72-1.584 1.968-1.584 3.312 0 .216.12.336.288.336.384 0 .912-.264 2.496-1.512.168-.12.216-.168.288-.168.048 0 .096.048.096.096 0 .072-.024.12-.168.24-1.752 1.416-2.4 1.728-3.144 1.728a.897.897 0 0 1-.912-.912c0-1.488 1.704-2.616 1.704-3.312 0-.096-.024-.192-.12-.192-.936 0-3.456 2.4-4.992 4.176-.552.624-.696 1.128-.888 1.128-.216 0-.504-.48-.504-.72 0-2.088 4.968-11.904 7.848-11.904.384 0 .72.336.72.72 0 1.224-3.888 5.688-6.384 7.968-.624 1.056-1.032 2.16-1.032 2.52zm1.464-3.384c.672-.624 5.616-5.856 5.616-7.224 0-.168-.096-.24-.264-.24-1.2 0-5.352 7.152-5.352 7.464zm-97.544-24.408L149.528 24h-11.52l.072-.816 1.248-.144c.456-.048.624-.144.624-.336V10.272c0-.192-.12-.24-.624-.312l-1.248-.144-.072-.816h11.52v4.344h-1.032l-.528-2.424c-.264-.936-.48-1.032-5.136-1.032h-.912v6.024h.912c2.016 0 2.28-.024 2.424-.456l.528-1.608h.84l-.504 4.992h-.792l-.192-1.536c-.024-.384-.168-.528-2.352-.528h-.864v6.336h.648c5.088 0 5.328-.144 5.64-1.032l.6-2.328h1.176zm13.416 3.6l-.072.576-3.576.432v-1.608h-.072c-.792.864-1.992 1.584-3.384 1.584-2.52 0-4.488-2.232-4.488-5.376 0-3.288 2.304-5.952 5.736-5.952.696 0 1.512.192 2.16.432h.048v-4.2c0-.24-.048-.384-.216-.432l-1.872-.432.096-.576 3.696-.528v15.24c0 .24.048.408.24.456l1.704.384zm-3.648-1.56V15.36c-.72-.72-1.584-1.392-2.76-1.392-1.968 0-3.312 1.776-3.312 4.368 0 2.76 1.368 4.56 3.432 4.56 1.104 0 1.944-.48 2.64-1.104zm20.784-8.496l-.072.792-.744.12c-.6.096-.768.264-1.128 1.32l-2.784 8.64h-1.176l-2.616-6.984-2.76 6.984h-1.176l-3.168-9.216c-.168-.504-.336-.648-.84-.72l-.72-.12-.072-.816h4.8l-.072.792-.792.12c-.384.048-.6.288-.456.696l2.424 7.2 2.328-6.144-.36-1.008c-.192-.504-.36-.624-.912-.696l-.744-.168-.072-.792h4.872l-.072.792-.768.12c-.408.048-.624.264-.48.696l2.592 7.248 2.016-6.6c.24-.864.216-1.248-.528-1.344l-.744-.12-.072-.792h4.296zm10.32 9.576c-.744.912-1.464 1.488-2.232 1.488-.864 0-1.536-.528-1.536-1.776h-.096c-.912.984-1.848 1.776-3 1.776-1.584 0-2.928-1.176-2.928-2.784 0-2.016 1.824-3.12 6.12-4.176v-.216c.024-2.568-.888-3.24-2.448-3.24-.912 0-1.896.384-1.896.624 0 .12.48.504.48 1.104 0 .552-.48 1.08-1.176 1.08-.672 0-1.152-.432-1.152-1.056 0-1.152 2.496-2.784 4.44-2.784 2.664 0 3.6 1.08 3.456 4.68l-.192 4.584c-.024.552.168.84.528.84.336 0 .72-.264 1.224-.672l.408.528zm-3.864-1.104l.144-3.6c-3.216.84-4.32 1.728-4.32 3 0 1.152.816 1.848 1.824 1.848.84 0 1.56-.528 2.352-1.248zm12.672-7.632c0 .672-.408 1.224-1.128 1.224-.504 0-.936-.36-1.152-.768-.744.456-1.848 1.56-2.448 2.76v5.4c0 .192.096.312.648.336l1.272.096.072.816h-5.352l.072-.816.96-.096c.432-.024.6-.12.6-.36v-6.792c0-1.104-.12-1.248-.744-1.416l-.984-.144.048-.648 3.408-.792v3.12h.096c1.392-2.328 2.256-3.144 3.288-3.144.864 0 1.344.552 1.344 1.224zm12.48 9.216l-.072.576-3.576.432v-1.608h-.072c-.792.864-1.992 1.584-3.384 1.584-2.52 0-4.488-2.232-4.488-5.376 0-3.288 2.304-5.952 5.736-5.952.696 0 1.512.192 2.16.432h.048v-4.2c0-.24-.048-.384-.216-.432l-1.872-.432.096-.576 3.696-.528v15.24c0 .24.048.408.24.456l1.704.384zm-3.648-1.56V15.36c-.72-.72-1.584-1.392-2.76-1.392-1.968 0-3.312 1.776-3.312 4.368 0 2.76 1.368 4.56 3.432 4.56 1.104 0 1.944-.48 2.64-1.104z" fill="#000" />
    </g>
  </Svg>
);

export default Names;
