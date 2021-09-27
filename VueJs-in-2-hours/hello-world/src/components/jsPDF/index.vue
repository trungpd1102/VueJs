<template>
	<div class="jspdf-main">
		<div class="content template-area" id="capture">
			<div class="template-header template-children__margin">
				<h1>お見積もり書</h1>
				<hr />
				<div class="header-table">
					<div class="h-table__left">
						<table>
							<tr>
								<td colspan="2"></td>
							</tr>
							<tr class="border__bottom">
								<td
									class="
										text-align__left
										font-size__large
										border__bottom
									"
									colspan="2"
								>
									<p>取引先名様</p>
								</td>
							</tr>
							<tr>
								<td class="text-align__right" colspan="2">
									下記の通りお見積もり申し上げます。
								</td>
							</tr>
							<tr>
								<td></td>
							</tr>
							<tr>
								<td>案件名</td>
								<td class="text-align__left border__bottom">
									ロゴデータ作成
								</td>
							</tr>
							<tr v-for="n in 4" :key="n">
								<td></td>
							</tr>
							<tr class="font-size__large">
								<td class="border__bottom">金額</td>
								<td class="border__bottom">¥11,000(税込)</td>
							</tr>
						</table>
					</div>
					<div class="h-table__right">
						<table>
							<tr>
								<td>発行日</td>
								<td class="text-align__right" colspan="3">
									2021-07-31
								</td>
								<td></td>
							</tr>
							<tr>
								<td>ページ：</td>
								<td class="text-align__right" colspan="3">1</td>
								<td></td>
							</tr>
							<tr v-for="n in 3" :key="n">
								<td></td>
							</tr>

							<tr>
								<td class="text-align__left" colspan="5">
									〒465-0051
								</td>
							</tr>
							<tr>
								<td class="text-align__left" colspan="5">
									愛知県名古屋市名東区社が丘1-1605
								</td>
							</tr>
							<tr>
								<td class="text-align__left" colspan="5">
									株式会社 CROSS
								</td>
							</tr>
							<tr>
								<td></td>
								<td>TEL：</td>
								<td class="text-align__left" colspan="3">
									052-702-0066
								</td>
							</tr>
							<tr>
								<td></td>
								<td>担当：</td>
								<td class="text-align__left" colspan="3">青木真弓</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="header-seal">
					<img src="./image.png" alt="company seal" />
				</div>
			</div>
			<div class="template-body template-children__margin">
				<div class="body-table">
					<table>
						<tr>
							<th colspan="8">品目</th>
							<th colspan="2">数 量</th>
							<th colspan="2">単 価</th>
							<th colspan="2">金 額</th>
						</tr>
						<tr></tr>
						<tr>
							<td colspan="8"></td>
							<td>1</td>
							<td>式</td>
							<td colspan="2">¥10,000</td>
							<td colspan="2">¥10,000</td>
						</tr>
						<tr v-for="n in 17" :key="n">
							<td colspan="8"></td>
							<td></td>
							<td></td>
							<td colspan="2"></td>
							<td colspan="2"></td>
						</tr>
						<tr class="hide-row">
							<td v-for="n in 14" :key="n"></td>
						</tr>
					</table>
				</div>
			</div>
			<div class="template-footer template-children__margin"></div>
		</div>
		<!-- <div id="capture">お見積もり書</div> -->

		<button @click="createPDF" type="button">Create pdf</button>
	</div>
</template>
<script>
import jsPDF from 'jspdf';
import '@/font/Yomogi-Regular-normal.js';
import '@/font/Japanese-normal.js';
import '@/font/NotoSansJP-Regular-Alphabetic-normal.js';
import '@/font/YuGothM-normal.js';
// import html2canvas from 'html2canvas';
export default {
	data() {
		return {};
	},
	methods: {
		createPDF() {
			let doc = new jsPDF('p', 'pt', 'a4');
			doc.setFont('Japanese', 'normal'); // set font
			doc.html(document.body, {
				callback: function(pdf) {
					pdf.save('template.pdf');
				},
				html2canvas: {
					scale: 0.65,
				},
			});
			// doc.text('お見積もり書', 10, 100);
			// doc.save();
		},
	},
};
</script>

<style src="./index.css" type="text/css"></style>
