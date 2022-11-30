import puppeteer from "puppeteer";


class HeroicRacesCrawlerParser {
    url = "https://www.ditlep.com/heroicrace/"

    constructor(id = null) {
        if (id) {
            this.url += `?id=${id}`
        }
    }

    async getData() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(this.url);

        await page.setViewport({ width: 720, height: 480 });
        await page.waitForSelector(".ng-scope:nth-child(5) .animate__faster");

        const pageDataContent = await page.evaluate(() => {

            class IslandParser {
                constructor($island) {
                    this.$island = $island;
                }

                getDuration() {
                    return null;
                }

                getDragons() {
                    const $dragonCards = this.$island.querySelector(".dragon-box-detail");

                    const dragons = [];

                    for (const $dragonCard of $dragonCards) {
                        const dragon = new DragonCardParser($dragonCard);

                        dragons.push(dragon);
                    }

                    return dragons;
                }

                getName() {
                    const $name = this.$island.querySelector(".text-uppercase.ng-binding");
                    const name = $name.textContent.replace("HEROIC RACE GUIDE", "").trim();

                    return name;
                }

                getAll() {

                }
            }

            class DragonCardParser {
                constructor($dragonCard) {
                    this.$dragonCard = $dragonCard;
                }

                getId() {
                    
                }

                getName() {

                }

                getCategory() {

                }

                getRarity() {

                }

                getAttackInfoBasic() {

                }

                getAll() {

                }
            }

            class AttackInfoBasicParser {
                constructor($attacks) {
                    this.$attacks = $attacks;
                }

                getName() {

                }

                getDamege() {

                }

                getElementType() {

                }

                getAll() {
                    const name = this.getName();
                    const damege = this.getDamege();
                    const elementType = this.getElementType();

                    return { name, damege, elementType };
                }
            }

            class LapParser {
                constructor($lap) {

                }

                getNumber() {

                }

                getReward() {

                }

                getNodes() {

                }

                getAll() {

                }
            }

            class LapRewardParser {
                constructor($lapReward) {
                    this.$lapReward = $lapReward;
                }
                
                getIconUrl() {

                }

                getType() {

                }

                getQuantity() {

                }

                getAll() {

                }
            }

            class NodeParser {
                constructor($node) {
                    this.$node = $node;
                }

                getNumber() {

                }

                getMissions() {

                }

                getAll() {

                }
            }

            class MissionParser {
                constructor($missions) {
                    this.$missions = $missions;
                }
            }

            return;
        });
    }
}