# <span style="font-size:1.5em;">Rick and Morty Viewer</span>

![Rick and Morty](https://rickandmortyapi.com/api/character/avatar/1.jpeg)

## <span style="font-size:1.2em;">Описание</span>

<span style="font-size:1.1em;">Rick and Morty Viewer - это веб-приложение для просмотра персонажей из популярного мультсериала "Рик и Морти". Приложение использует открытое API [Rick and Morty API](https://rickandmortyapi.com/) для получения данных о персонажах.</span>

## <span style="font-size:1.2em;">Установка</span>

1. **<span style="font-size:1.1em;">Клонирование репозитория:</span>**

   <span style="font-size:1.1em;">Выполните следующую команду для клонирования репозитория:</span>


   git clone https://github.com/ShalkVlad/Card-Rick-and-Morty.git


2. **<span style="font-size:1.1em;">Установка зависимостей:</span>**

   <span style="font-size:1.1em;">Перейдите в каталог проекта:</span>


   cd Card-Rick-and-Morty


   <span style="font-size:1.1em;">Затем выполните команду установки зависимостей:</span>


   npm install


## <span style="font-size:1.2em;">Запуск приложения</span>

<span style="font-size:1.1em;">Чтобы запустить приложение локально, выполните следующую команду:</span>


npm run serve


<span style="font-size:1.1em;">После выполнения этой команды приложение будет доступно по адресу \`http://localhost:8080\`.</span>

## <span style="font-size:1.2em;">Сборка для продакшена</span>

<span style="font-size:1.1em;">Для сборки приложения в режиме продакшена используйте команду:</span>


npm run build


<span style="font-size:1.1em;">После выполнения этой команды в каталоге \`dist\` появится готовая для развертывания версия.</span>
`;

fs.writeFile('README.md', readmeContent, err => {
  if (err) {
    console.error('Ошибка при создании файла README.md:', err);
    return;
  }
  console.log('README.md успешно создан!');
});
