import { LightningElement} from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartJS';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';

export default class TestDemo extends LightningElement {
    isChartInitilized 
    chart

    renderedCallback()
    { 
        if(this.isChartInitilized)
        {
            return 
        }
        loadScript(this, chartJs + '/chartJs/Chart.js').then(() => {
    
            console.log('chart found')
            this.getChart()
            this.isChartInitilized = true;
        }).then((error)=>{console.log(error)});
        
        
    }
    getChart()
    {   window.Chart.platform.disableCSSInjection = true
        const canvas = document.createElement('canvas')
        this.template.querySelector('div.chart').appendChild(canvas)      
        const ctx = canvas.getContext('2d')
        this.chart = new window.Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });

    }
     
}