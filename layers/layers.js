var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_parcellesprivees_reedition_1 = new ol.format.GeoJSON();
var features_parcellesprivees_reedition_1 = format_parcellesprivees_reedition_1.readFeatures(json_parcellesprivees_reedition_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcellesprivees_reedition_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcellesprivees_reedition_1.addFeatures(features_parcellesprivees_reedition_1);
var lyr_parcellesprivees_reedition_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcellesprivees_reedition_1, 
                style: style_parcellesprivees_reedition_1,
                popuplayertitle: 'parcellesprivees_reedition',
                interactive: true,
                title: '<img src="styles/legend/parcellesprivees_reedition_1.png" /> parcellesprivees_reedition'
            });
var format_VTT_REEDITION_2 = new ol.format.GeoJSON();
var features_VTT_REEDITION_2 = format_VTT_REEDITION_2.readFeatures(json_VTT_REEDITION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VTT_REEDITION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VTT_REEDITION_2.addFeatures(features_VTT_REEDITION_2);
var lyr_VTT_REEDITION_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VTT_REEDITION_2, 
                style: style_VTT_REEDITION_2,
                popuplayertitle: 'VTT_REEDITION',
                interactive: true,
                title: '<img src="styles/legend/VTT_REEDITION_2.png" /> VTT_REEDITION'
            });

lyr_OSMStandard_0.setVisible(true);lyr_parcellesprivees_reedition_1.setVisible(true);lyr_VTT_REEDITION_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_parcellesprivees_reedition_1,lyr_VTT_REEDITION_2];
lyr_parcellesprivees_reedition_1.set('fieldAliases', {'idu': 'idu', 'nomcommune': 'nomcommune', 'codecommun': 'codecommun', 'adresse': 'adresse', 'code': 'code', 'comptecomm': 'comptecomm', 'voie': 'voie', 'proprietai': 'proprietai', 'propriet_1': 'propriet_1', 'n_vtt': 'n_vtt', 'remarque': 'remarque', });
lyr_VTT_REEDITION_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'nom': 'nom', 'code_vtt': 'code_vtt', 'clé_vtt': 'clé_vtt', 'balisage': 'balisage', 'difficult': 'difficult', 'shape_leng': 'shape_leng', 'releve_gps': 'releve_gps', 'oenotouris': 'oenotouris', 'appli_circ': 'appli_circ', 'web': 'web', 'ffcyclo': 'ffcyclo', 'loisirs_ig': 'loisirs_ig', 'longueur_e': 'longueur_e', 'goudron': 'goudron', 'id_vtt': 'id_vtt', 'top_5': 'top_5', 'cot_juridi': 'cot_juridi', 'juridiques': 'juridiques', 'obs_entre_': 'obs_entre_', 'date_gps': 'date_gps', 'created_us': 'created_us', 'last_edit1': 'last_edit1', 'prog_veill': 'prog_veill', 'interv_22': 'interv_22', 'd_vei_22': 'd_vei_22', 'o_vei_22': 'o_vei_22', 'obs_vei_22': 'obs_vei_22', 'note_i_22': 'note_i_22', 'respbali22': 'respbali22', 'datebali22': 'datebali22', 'd_vei_23': 'd_vei_23', 'prev_23-24': 'prev_23-24', 'prev_24-25': 'prev_24-25', 'prev_25-26': 'prev_25-26', 'prev_26-27': 'prev_26-27', 'interv_23': 'interv_23', 'Long': 'Long', 'commune': 'commune', });
lyr_parcellesprivees_reedition_1.set('fieldImages', {'idu': 'TextEdit', 'nomcommune': 'TextEdit', 'codecommun': 'TextEdit', 'adresse': 'TextEdit', 'code': 'TextEdit', 'comptecomm': 'TextEdit', 'voie': 'TextEdit', 'proprietai': 'TextEdit', 'propriet_1': 'TextEdit', 'n_vtt': 'TextEdit', 'remarque': '', });
lyr_VTT_REEDITION_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'nom': 'TextEdit', 'code_vtt': 'TextEdit', 'clé_vtt': 'TextEdit', 'balisage': 'TextEdit', 'difficult': 'TextEdit', 'shape_leng': 'TextEdit', 'releve_gps': 'TextEdit', 'oenotouris': 'TextEdit', 'appli_circ': 'TextEdit', 'web': 'TextEdit', 'ffcyclo': 'TextEdit', 'loisirs_ig': 'TextEdit', 'longueur_e': 'TextEdit', 'goudron': 'TextEdit', 'id_vtt': 'TextEdit', 'top_5': 'TextEdit', 'cot_juridi': 'TextEdit', 'juridiques': 'TextEdit', 'obs_entre_': 'TextEdit', 'date_gps': 'DateTime', 'created_us': 'TextEdit', 'last_edit1': 'DateTime', 'prog_veill': 'TextEdit', 'interv_22': 'TextEdit', 'd_vei_22': 'DateTime', 'o_vei_22': 'TextEdit', 'obs_vei_22': 'TextEdit', 'note_i_22': 'TextEdit', 'respbali22': 'TextEdit', 'datebali22': 'DateTime', 'd_vei_23': 'DateTime', 'prev_23-24': 'TextEdit', 'prev_24-25': 'TextEdit', 'prev_25-26': 'TextEdit', 'prev_26-27': 'TextEdit', 'interv_23': 'TextEdit', 'Long': 'TextEdit', 'commune': 'TextEdit', });
lyr_parcellesprivees_reedition_1.set('fieldLabels', {'idu': 'no label', 'nomcommune': 'no label', 'codecommun': 'no label', 'adresse': 'no label', 'code': 'no label', 'comptecomm': 'no label', 'voie': 'no label', 'proprietai': 'no label', 'propriet_1': 'no label', 'n_vtt': 'no label', 'remarque': 'no label', });
lyr_VTT_REEDITION_2.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'nom': 'no label', 'code_vtt': 'no label', 'clé_vtt': 'no label', 'balisage': 'no label', 'difficult': 'no label', 'shape_leng': 'no label', 'releve_gps': 'no label', 'oenotouris': 'no label', 'appli_circ': 'no label', 'web': 'no label', 'ffcyclo': 'no label', 'loisirs_ig': 'no label', 'longueur_e': 'no label', 'goudron': 'no label', 'id_vtt': 'no label', 'top_5': 'no label', 'cot_juridi': 'no label', 'juridiques': 'no label', 'obs_entre_': 'no label', 'date_gps': 'no label', 'created_us': 'no label', 'last_edit1': 'no label', 'prog_veill': 'no label', 'interv_22': 'no label', 'd_vei_22': 'no label', 'o_vei_22': 'no label', 'obs_vei_22': 'no label', 'note_i_22': 'no label', 'respbali22': 'no label', 'datebali22': 'no label', 'd_vei_23': 'no label', 'prev_23-24': 'no label', 'prev_24-25': 'no label', 'prev_25-26': 'no label', 'prev_26-27': 'no label', 'interv_23': 'no label', 'Long': 'no label', 'commune': 'no label', });
lyr_VTT_REEDITION_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});