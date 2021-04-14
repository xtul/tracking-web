<template>
	<vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
			data-projection="EPSG:4326" class="map">
		<vl-view :zoom.sync="map.zoom" :center.sync="map.center" :rotation.sync="map.rotation"></vl-view>

		<div :key="device.imei" v-for="device in $store.state.devices.devices">
			<template v-if="device.position != null">
				<vl-feature :id="'position-feature-' + device.imei">
					<vl-geom-point :coordinates="[device.position.Lon, device.position.Lat]"></vl-geom-point>
					<vl-style-box>
						<vl-style-icon src="/img/loc.png" :scale="0.2" :anchor="[0.5, 1]"></vl-style-icon>
						<vl-style-text class="feature-label" :text="device.name" :offsetY="15" font="12px Avenir,Helvetica,Arial,sans-serif"></vl-style-text>
					</vl-style-box>
				</vl-feature>	
			</template>
		</div>

		<vl-layer-tile id="osm">
			<vl-source-osm></vl-source-osm>
		</vl-layer-tile>
	</vl-map>
</template>

<script>
export default {
	data() {
		return {
			map: {
				zoom: 2,
				center: [0, 0],
				rotation: 0
			}
		}
	}
}
</script>
