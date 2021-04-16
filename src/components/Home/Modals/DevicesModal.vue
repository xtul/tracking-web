<template>
	<b-modal size="lg" id="devices-modal" title="Your devices">
		<b-container>
			<b-row>
				<!-- device list -->
				<b-col cols="3">
					<b-list-group>
						<template v-for="device in $store.state.devices.devices">
							<b-list-group-item 
								:key="device.id"
								:active="currentDevice === device.id"
								@click="setActiveDevice(device.id)">
									{{device.name}}
							</b-list-group-item>
						</template>
					</b-list-group>
				</b-col>

				<!-- selected device details -->
				<b-col cols="9" v-if="currentDevice != 0">
					<b-form>
						<b-form-group
							id="input-group-1"
							label="IMEI:"
							label-for="imei"
							description="Device identifier. Required for proper tracking."
						>
							<b-form-input
								id="imei"
								v-model="form.imei"
								:value="form.imei"
								placeholder="Enter IMEI"
								required
							></b-form-input>
						</b-form-group>

						<b-form-group 
							id="input-group-2"
							label="Name:" 
							label-for="name"
						>
							<b-form-input
								id="name"
								v-model="form.name"
								placeholder="Enter name"
								description="Device name, can be anything you wish."
								required
							></b-form-input>
						</b-form-group>

						<b-form-checkbox
							id="checkbox-1"
							v-model="form.enabled"
							name="checkbox-1"
							value="true"
							unchecked-value="false"
						>
							Enabled
						</b-form-checkbox>

						<hr/>

						<b-button
							variant="primary"
							@click="saveDevice()"
						>
							Save changes
						</b-button>
					</b-form>
				</b-col>
			</b-row>
		</b-container>
	</b-modal>
</template>

<script>
export default {
    name: 'DevicesModal',
	data() {
		return {
			currentDevice: 0,
			form: {
				imei: '',
				name: '',
				enabled: true
			}
		}
	},
	methods: {
		setActiveDevice(id) {
			this.currentDevice = id;

			let getDeviceById = this.$store.getters['devices/getDeviceById'];
			const device = getDeviceById(id);

			this.form.imei = device.imei;
			this.form.name = device.name;
			this.form.enabled = device.enabled;
		},
		saveDevice() {
			const payload = {
				imei: this.form.imei,
				device: this.form
			};

			this.$store.dispatch('devices/updateDevice', payload);
		}
	}
}
</script>