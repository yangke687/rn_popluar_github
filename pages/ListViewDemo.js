import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, RefreshControl } from 'react-native';
import ListView from 'deprecated-react-native-listview';
import NavigationBar from '../NavigationBar';

const rows = [
  {
    email: 'hpilkinton0@latimes.com',
    fullname: 'Horatio Pilkinton',
  },
  {
    email: 'atune1@parallels.com',
    fullname: 'Adah Tune',
  },
  {
    email: 'dfroment2@disqus.com',
    fullname: 'Demetri Froment',
  },
  {
    email: 'berridge3@blogtalkradio.com',
    fullname: 'Brunhilde Erridge',
  },
  {
    email: 'mkasperski4@vistaprint.com',
    fullname: 'Miriam Kasperski',
  },
  {
    email: 'hconquest5@photobucket.com',
    fullname: 'Harcourt Conquest',
  },
  {
    email: 'jlovering6@odnoklassniki.ru',
    fullname: 'Jecho Lovering',
  },
  {
    email: 'cmclane7@dell.com',
    fullname: 'Cari McLane',
  },
  {
    email: 'mmcmahon8@ihg.com',
    fullname: 'Meg McMahon',
  },
  {
    email: 'rgomery9@bigcartel.com',
    fullname: 'Rachele Gomery',
  },
  {
    email: 'ijorona@eventbrite.com',
    fullname: 'Iseabal Joron',
  },
  {
    email: 'ncrotchb@blogs.com',
    fullname: 'Nev Crotch',
  },
  {
    email: 'hbiasionic@soundcloud.com',
    fullname: 'Hirsch Biasioni',
  },
  {
    email: 'beuld@uol.com.br',
    fullname: 'Bent Eul',
  },
  {
    email: 'nwilloughbye@springer.com',
    fullname: 'Niko Willoughby',
  },
  {
    email: 'kshoebridgef@huffingtonpost.com',
    fullname: 'Katey Shoebridge',
  },
  {
    email: 'rspradbrowg@domainmarket.com',
    fullname: 'Rodolph Spradbrow',
  },
  {
    email: 'pbrownscombeh@cmu.edu',
    fullname: 'Paddy Brownscombe',
  },
  {
    email: 'ccastagnei@washingtonpost.com',
    fullname: 'Carolyne Castagne',
  },
  {
    email: 'jpatientj@pbs.org',
    fullname: 'Jakie Patient',
  },
  {
    email: 'gfleyk@360.cn',
    fullname: 'Gayel Fley',
  },
  {
    email: 'galveyl@nsw.gov.au',
    fullname: 'Glynis Alvey',
  },
  {
    email: 'snovotnem@indiegogo.com',
    fullname: 'Shandy Novotne',
  },
  {
    email: 'rlongmoren@sfgate.com',
    fullname: 'Rossy Longmore',
  },
  {
    email: 'cjolliffo@flickr.com',
    fullname: 'Chrysa Jolliff',
  },
  {
    email: 'hmarczykp@illinois.edu',
    fullname: 'Humbert Marczyk',
  },
  {
    email: 'rbenq@harvard.edu',
    fullname: 'Roslyn Ben',
  },
  {
    email: 'sduffrier@java.com',
    fullname: 'Sheelagh Duffrie',
  },
  {
    email: 'hgoedes@toplist.cz',
    fullname: 'Hadlee Goede',
  },
  {
    email: 'vrennardt@ihg.com',
    fullname: 'Valaria Rennard',
  },
  {
    email: 'llarimeru@g.co',
    fullname: 'Lilian Larimer',
  },
  {
    email: 'mrosenqvistv@walmart.com',
    fullname: 'Maure Rosenqvist',
  },
  {
    email: 'grandlesomew@twitter.com',
    fullname: 'Gunter Randlesome',
  },
  {
    email: 'fdunnanx@soundcloud.com',
    fullname: 'Flossi Dunnan',
  },
  {
    email: 'rbrookingy@examiner.com',
    fullname: 'Ricki Brooking',
  },
  {
    email: 'dginmanz@java.com',
    fullname: 'Daile Ginman',
  },
  {
    email: 'bspreadbury10@bizjournals.com',
    fullname: 'Bax Spreadbury',
  },
  {
    email: 'gsandeman11@tripod.com',
    fullname: 'Guss Sandeman',
  },
  {
    email: 'oparcell12@exblog.jp',
    fullname: 'Olivia Parcell',
  },
  {
    email: 'fbennough13@woothemes.com',
    fullname: 'Fredi Bennough',
  },
  {
    email: 'bhatcliffe14@google.it',
    fullname: 'Benni Hatcliffe',
  },
  {
    email: 'kgoosnell15@sciencedirect.com',
    fullname: 'Ky Goosnell',
  },
  {
    email: 'wpoxon16@smugmug.com',
    fullname: 'Willamina Poxon',
  },
  {
    email: 'follerenshaw17@ed.gov',
    fullname: 'Fredi Ollerenshaw',
  },
  {
    email: 'ateliga18@samsung.com',
    fullname: 'Alanah Teliga',
  },
  {
    email: 'bworsfield19@paypal.com',
    fullname: 'Brunhilda Worsfield',
  },
  {
    email: 'daronsohn1a@eventbrite.com',
    fullname: 'Dorine Aronsohn',
  },
  {
    email: 'blumsden1b@multiply.com',
    fullname: 'Bennie Lumsden',
  },
  {
    email: 'mcarine1c@dot.gov',
    fullname: 'Muire Carine',
  },
  {
    email: 'gramet1d@dion.ne.jp',
    fullname: 'Gale Ramet',
  },
];

class ListViewDemo extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(rows),
      isLoading: true,
    };
    this.onLoad();
  }

  renderRow = ({ email, fullname }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.tips}>{email}</Text>
        <Text style={styles.tips}>{fullname}</Text>
      </View>
    );
  };

  renderSeparator = () => {
    return <View style={styles.line} />;
  };

  renderFooter = () => {
    return (
      <Image
        style={styles.footer}
        source={{
          url:
            'https://c-ssl.duitang.com/uploads/item/201602/06/20160206102556_LGacR.thumb.700_0.gif',
        }}
      />
    );
  };

  onLoad = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title="List View" />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row) => this.renderRow(row)}
          renderSeparator={() => this.renderSeparator()}
          renderFooter={() => this.renderFooter()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={this.onLoad}
            />
          }
        />
      </View>
    );
  }
}

export default ListViewDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  row: {
    height: 50,
  },

  tips: {
    fontSize: 18,
  },

  line: {
    height: 1,
    backgroundColor: 'black',
  },

  footer: {
    width: '100%',
    height: 100,
  },
});
