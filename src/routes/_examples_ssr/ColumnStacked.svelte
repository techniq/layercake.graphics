<script>
	import { LayerCake, ScaledSvg, Html, flatten, uniques } from 'layercake';
	import { stack } from 'd3-shape';
	import { scaleBand, scaleOrdinal } from 'd3-scale';
	import { format, precisionFixed } from 'd3-format';

	import ColumnStacked from '../../components/ColumnStacked.svelte';
	import AxisX from '../../components/AxisX.html.svelte';
	import AxisY from '../../components/AxisY.html.svelte';

	import data from '../../data/fruitOrdinal.csv';

	const xKey = 'year';
	const yKey = [0, 1];
	const zKey = 'key';

	const seriesNames = Object.keys(data[0]).filter(d => d !== xKey);
	const seriesColors = ['#00e047', '#7ceb68', '#b7f486', '#ecfda5'];

	data.forEach(d => {
		seriesNames.forEach(name => {
			d[name] = +d[name];
		});
	});

	const stackData = stack()
		.keys(seriesNames);

	const series = stackData(data);

	const formatTickY = d => format(`.${precisionFixed(d)}s`)(d);
</script>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		ssr={true}
		percentRange={true}
		padding={{ top: 0, right: 0, bottom: 20, left: 20 }}
		x={d => d.data[xKey]}
		y={yKey}
		z={zKey}
		xScale={scaleBand().paddingInner([0.028]).round(true)}
		xDomain={uniques(data, xKey)}
		zScale={scaleOrdinal()}
		zDomain={seriesNames}
		zRange={seriesColors}
		flatData={flatten(series)}
		data={series}
	>
		<Html>
			<AxisX
				gridlines={false}
			/>
			<AxisY
				ticks={4}
				gridlines={false}
				formatTick={formatTickY}
			/>
		</Html>
		<ScaledSvg>
			<ColumnStacked/>
		</ScaledSvg>
	</LayerCake>
</div>
