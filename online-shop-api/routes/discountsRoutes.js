const router = require("express").Router();
const discountController = require("../controllers/discountController");


router.get('/', discountController.getDiscounts);

router.post('/', discountController.createDiscount);

router.get('/:discountId',discountController.getDiscount);

router.put('/:discountId',discountController.updateDiscount);

router.post('/:discountId',discountController.deleteDiscount);

module.exports = router;