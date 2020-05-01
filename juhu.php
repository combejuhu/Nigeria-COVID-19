<?php
$url = 'https://covid19.ncdc.gov.ng/';
$html = new DOMDocument();
@$html->loadHTMLFile($url);
$xpath = new DOMXPath($html);


// example 3: same as above with wildcard
$elements = $xpath->query("/html/body/div[2]/div/div/div[2]/div/div/div[1]/h2");

if (!is_null($elements)) {
    foreach ($elements as $element) {
        $nodes = $element->childNodes;
        foreach ($nodes as $node) {
            echo $node->nodeValue . "\n";
        }
    }
}
