//собираем заголовки из категории ресурсов
$docfind = $modx->getCollection('modResource',array('parent' => '19'));
foreach ($docfind as $k => $res) {
    $title_m = $res->get('pagetitle');
    $titles[] = $title_m;
}

$path = 'http://www.amur.info/index.rss';
$ctx = stream_context_create(array('http' => array('timeout' => 6)));
$file = file_get_contents($path, 0, $ctx);

if ($file) {
    $rss = simplexml_load_string($file);
    $i = 0;
    foreach ($rss->channel->item as $item){
        $namespaces = $item->getNameSpaces(true);
        $yandex = $item->children($namespaces['yandex']); 
        
        $full_text = (string)$yandex->{'full-text'};       //полный текст статьи
        $title = $item->title;                             //заголовок статьи
        $pubdate = $item->pubDate;                         //дата публикации
        $link = $item->link;                               //ссылка на новость
        
	//создаем ресурсы в MODX, если ресурсов с такими заголовками еще нет
        if (in_array($title, $titles) == false) {
            $response = $modx->runProcessor('resource/create', array(
                'pagetitle' => $title,
                'longtitle' => $pubdate,
                'description' => $link,
                'introtext' => '',
                'content' => $full,
                'template' => $template,
            	'hidemenu' => 1,
            	'published' => 1,
            	'parent' => '19'
            ));
        }
        
        $i++;
        if ($i == 5) break;
    }
}