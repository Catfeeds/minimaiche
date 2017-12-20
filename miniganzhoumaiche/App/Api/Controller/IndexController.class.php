<?php
namespace Api\Controller;
use Think\Controller;
class IndexController extends PublicController {
	//***************************
	//  首页数据接口
	//***************************
    public function index(){
    	//如果缓存首页没有数据，那么就读取数据库
    	/***********获取首页顶部轮播图************/
    	$ggtop=M('guanggao')->where('position=1')->order('sort desc,id asc')->field('id,name,photo,type,action')->select();
		foreach ($ggtop as $k => $v) {
			$ggtop[$k]['photo']=__DATAURL__.$v['photo'];
			$ggtop[$k]['name']=urlencode($v['name']);
		}
    	/***********获取首页顶部轮播图 end************/

        //获取底部图片
        $ggbottom=M('guanggao')->where('position=2')->order('sort desc,id asc')->field('id,name,photo,type,action')->select();
        foreach ($ggbottom as $k => $v) {
            $ggbottom[$k]['photo']=__DATAURL__.$v['photo'];
            $ggbottom[$k]['name']=urlencode($v['name']);
        }
    	//======================
    	//首页推荐分类前八个
    	//======================
    	$procat = M('category')->where('bz_2=1 AND tid!=0')->order('bz_2 desc,sort desc')->field('id,name,bz_1')->limit(8)->select();
    	foreach ($procat as $k => $v) {
    		$procat[$k]['bz_1'] = __DATAURL__.$v['bz_1'];
    	}

        //======================
        //首页推荐购物券
        //======================
        $time = time();
        $shop = M('voucher')->where('del=0 AND end_time>"'.$time.'"')->select();
        foreach($shop as $k => $v){
            $shop[$k]['cate_name'] = M('category')->where('id="'.$v['cate_id'].'"')->getField('name');
        }

        //======================
        //首页小图标
        //======================
        $tubiao = array();
        // $tubiao['ka'] = __PUBLICURL__.'home/images/ka.png';
        // $tubiao['qi'] = __PUBLICURL__.'home/images/qi.png';
        // $tubiao['ping'] = __PUBLICURL__.'home/images/ping.png';

        //======================
        //首页推荐人气商品
        //======================
        $renqi = M('product')->where('del=0 AND pro_type=1 AND is_down=0 AND type=1')->order('renqi desc')->select();
        foreach($renqi as $k => $v){
             $renqi[$k]['photo_x'] =  __DATAURL__.M('attr_spec_price_store')->where('pid="'.$v['id'].'"')->getField('photo_x');
             $tag_id = M('attr_spec_price_store')->where('pid="'.$v['id'].'"')->getField('tag_id');
             $renqi[$k]['tag'] = M('tag')->where('id="'.$tag_id.'"')->getField('name');
             $renqi[$k]['price'] = M('attr_spec_price_store')->where('pid="'.$v['id'].'"')->getField('price_yh');
             $renqi[$k]['photo_d'] = M('attr_spec_price_store')->where('pid="'.$v['id'].'"')->getField('photo_d');
             $renqi[$k]['photo_d'] = __DATAURL__.$renqi[$k]['photo_d'];
             $renqi[$k]['ping'] = M('product_dp')->where('pid="'.$v['id'].'"')->count();
        }

        //======================
        //首页推荐品牌
        //======================
        $brand = M('brand')->where('type=1')->field('id,name,photo')->select();
        foreach ($brand as $k => $v) {
            $brand[$k]['photo'] = __DATAURL__.$v['photo'];
        }

    	//======================
    	//首页推荐产品
    	//======================
    	$pro_list = M('product')->where('del=0 AND pro_type=1 AND is_down=0 AND type=1')->order('sort desc,id desc')->select();
    	foreach ($pro_list as $k => $v) {
    		$pro_list[$k]['photo_x'] = __DATAURL__.$v['photo_x'];
    	}

    	echo json_encode(array('ggtop'=>$ggtop,'procat'=>$procat,'prolist'=>$pro_list,'brand'=>$brand,'shop'=>$shop,'renqi'=>$renqi,'tubiao'=>$tubiao,'ggbottom'=>$ggbottom));
    	exit();
    }

    public function index2(){
        //如果缓存首页没有数据，那么就读取数据库
        /***********获取首页顶部轮播图************/
        $ggtop=M('guanggao')->where('position=1')->order('sort desc,id asc')->field('id,name,photo,type,action')->select();
        foreach ($ggtop as $k => $v) {
            $ggtop[$k]['photo']=__DATAURL__.$v['photo'];
            $ggtop[$k]['name']=urlencode($v['name']);
        }
        /***********获取首页顶部轮播图 end************/

        //获取底部图片
        $ggbottom=M('guanggao')->where('position=2')->order('sort desc,id asc')->field('id,name,photo,type,action')->select();
        foreach ($ggbottom as $k => $v) {
            $ggbottom[$k]['photo']=__DATAURL__.$v['photo'];
            $ggbottom[$k]['name']=urlencode($v['name']);
        }
           

        //======================
        //首页推荐人气商品
        //======================
        // $renqi = M('product')->where('del=0 AND pro_type=1 AND is_down=0 AND type=1')->order('renqi desc')->select();
        // foreach($renqi as $k => $v){
        //      $renqi[$k]['photo_x'] =  __DATAURL__.M('attr_spec_price_store')->where('pid="'.$v['id'].'"')->getField('photo_x');
        //      $tag_id = M('attr_spec_price_store')->where('pid="'.$v['id'].'"')->getField('tag_id');
        //      $renqi[$k]['tag'] = M('tag')->where('id="'.$tag_id.'"')->getField('name');
        //      $renqi[$k]['price'] = M('attr_spec_price_store')->where('pid="'.$v['id'].'"')->getField('price_yh');
        //      $renqi[$k]['photo_d'] = M('attr_spec_price_store')->where('pid="'.$v['id'].'"')->getField('photo_d');
        //      $renqi[$k]['photo_d'] = __DATAURL__.$renqi[$k]['photo_d'];
        //      $renqi[$k]['ping'] = M('product_dp')->where('pid="'.$v['id'].'"')->count();
        // }

        //======================
        //首页推荐品牌
        //======================
        // $brand = M('brand')->where('type=1')->field('id,name,photo')->select();
        // foreach ($brand as $k => $v) {
        //     $brand[$k]['photo'] = __DATAURL__.$v['photo'];
        // }

        //======================
        //首页推荐产品
        //======================
        $list1 = M('product')->where('del=0 AND pro_type=1 AND is_down=0 AND type=1 AND cid=1')->order('sort desc,id desc')->limit(2)->select();
        foreach ($list1 as $k => $v) {
            $list1[$k]['photo_x'] = __DATAURL__.$v['photo_x'];
        }

        $list2 = M('product')->where('del=0 AND pro_type=1 AND is_down=0 AND type=1 AND cid=2')->order('sort desc,id desc')->limit(2)->select();
        foreach ($list2 as $k => $v) {
            $list2[$k]['photo_x'] = __DATAURL__.$v['photo_x'];
        }

        $list3 = M('product')->where('del=0 AND pro_type=1 AND is_down=0 AND type=1 AND cid=3')->order('sort desc,id desc')->limit(3)->select();
        foreach ($list3 as $k => $v) {
            $list3[$k]['photo_x'] = __DATAURL__.$v['photo_x'];
        }

        $list4 = M('product')->where('del=0 AND pro_type=1 AND is_down=0 AND type=1 AND cid=4')->order('sort desc,id desc')->limit(2)->select();
        foreach ($list4 as $k => $v) {
            $list4[$k]['photo_x'] = __DATAURL__.$v['photo_x'];
        }

        $buy = M('supply')->where('type=1')->select();
        foreach ($buy as $k => $v) {
            $buy[$k]['photo'] = __DATAURL__.$v['photo'];
            $buy[$k]['addtime'] = date('Y-m-d',$v['addtime']);
        }

        $sale = M('supply')->where('type=2')->select();
        foreach ($sale as $k => $v) {
            $sale[$k]['photo'] = __DATAURL__.$v['photo'];
            $sale[$k]['addtime'] = date('Y-m-d',$v['addtime']);
        }

        $news = M('news')->order('sort desc,id desc')->select();
        foreach($news as $k => $v){
            $news[$k]['photo'] = __DATAURL__.$v['photo'];
            $news[$k]['addtime'] = date('Y-m-d',$v['addtime']);
        }

        echo json_encode(array('ggtop'=>$ggtop,'list1'=>$list1,'list2'=>$list2,'list3'=>$list3,'list4'=>$list4,'ggbottom'=>$ggbottom,'buy'=>$buy,'sale'=>$sale,'news'=>$news));
        exit();
    }
    /**
     * [getlist 加载更多]
     * @return [type] [description]
     */
    public function getlist(){
        $page = intval($_REQUEST['page']);
        $limit = intval($page*8)-8;

        $pro_list = M('product')->where('del=0 AND pro_type=1 AND is_down=0 AND type=1')->order('sort desc,id desc')->field('id,name,photo_x,price_yh,shiyong')->limit($limit.',8')->select();
        foreach ($pro_list as $k => $v) {
            $pro_list[$k]['photo_x'] = __DATAURL__.M('attr_spec_price_store')->where('pid="'.$v['id'].'"')->getField('photo_x');
        }

        echo json_encode(array('prolist'=>$pro_list));
        exit();
    }


    //获取联系电话
    public function getPhone(){
        $tel = M('program')->limit(1)->getField('tel');
        if($tel){
            echo json_encode(array('status'=>1,'tel'=>$tel));
            exit();
        }else{
            echo json_encode(array('status'=>0,'err'=>'网络错误!'));
            exit();
        }
    }

    //获取店铺地址
    public function getLocal(){
        $location_x = floatval(M('program')->limit(1)->getField('location_x'));
        $location_y = floatval(M('program')->limit(1)->getField('location_y'));
        $shop_name = M('program')->limit(1)->getField('shop_name');
        $shop_address = M('program')->limit(1)->getField('shop_address');
        if($location_x && $location_y){
            echo json_encode(array('status'=>1,'location_x'=>$location_x,'location_y'=>$location_y,'shop_address'=>$shop_address,'shop_name'=>$shop_name));
            exit();
        }else{
            echo json_encode(array('status'=>0,'err'=>'网络错误!'));
            exit();
        }
    }
}
